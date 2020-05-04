const { Router } = require('express')
const router = Router()
const bycrypt = require('bcrypt')

const User = require('../models/User')
const logger = require('../helpers/logger')

router.post('/registration', async (req, res) => {
  try {
    const { email, fullName, password } = req.body.fullName

    const candidate = await User.findOne({ email })

    if (candidate) {
      logger.warn('user exist', candidate)
      return res.status(400).json({ message: 'User already exists' })
    }

    const hashedPass = await bycrypt.hash(password, 12)
    const user = new User({ email, fullName, password: hashedPass })

    await user.save()

    logger.info('user created', candidate)
    return res.status(201).json({ message: 'User succefull created!' })
  } catch (error) {
    logger.error('reg err', error)
    res.status(500).json({ message: 'Error on registration' })
  }
})

router.post('/login', async (req, res) => {})

module.exports = router
