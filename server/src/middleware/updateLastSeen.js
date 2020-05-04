const { UserModel } = require('../models');

module.exports = function (req, __, next) {
  if (req.user) {
    UserModel.findOneAndUpdate(
      { _id: req.user.id },
      {
        last_seen: new Date(),
      },
      { new: true },
      () => {}
    );
  }
  next();
};
