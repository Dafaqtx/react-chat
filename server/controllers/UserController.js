const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const { validationResult } = require('express-validator');

const { User } = require('../models');
const logger = require('../helpers/logger');

class UserController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logger.error('reg validation err', errors.array());

        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect registration data',
        });
      }

      const { email, fullName, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        logger.warn('user exist', candidate);
        return res.status(400).json({ message: 'User already exists' });
      }

      const hashedPass = await bcrypt.hash(
        password,
        config.get('BCRYPT_SALT_ROUNDS')
      );
      const user = new User({ email, fullName, password: hashedPass });

      await user.save();

      logger.info('user created', candidate);
      return res.status(201).json({ message: 'User successful created!' });
    } catch (error) {
      logger.error('reg err', error);
      res.status(500).json({ message: 'Error on registration' });
    }
  }

  async login(req, res) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        logger.error('login validation err', errors.array());

        return res.status(400).json({
          errors: errors.array(),
          message: 'Incorrect login data',
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        logger.error('login user exist err', error);
        res.status(404).json({ message: 'User does not exist' });
      }

      const isMatch = await bcrypt.compare(password.user.password);

      if (!isMatch) {
        logger.error('login isMatch err', errors.array());

        return res
          .status(403)
          .json({ message: 'Password is incorrect, try again' });
      }

      const token = jwt.sign({ user: user._id }, config.get('JWT_SECRET_KEY'), {
        expiresIn: config.get('JWT_TOKEN_EXPIRES'),
      });

      return res.json({ token, userId: user._id });
    } catch (error) {
      logger.error('reg err', error);
      res.status(500).json({
        message: 'Error on login',
      });
    }
  }
}

module.exports = UserController;
