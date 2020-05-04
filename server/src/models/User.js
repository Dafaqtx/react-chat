const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');
const { generatePasswordHash } = require('../helpers');
const { differenceInMinutes } = require('date-fns');

const UserSchema = new Schema(
  {
    email: {
      type: String,
      require: 'Email address is required',
      validate: [isEmail, 'Invalid email'],
      unique: true,
    },
    fullName: {
      type: String,
      required: 'Full name is required',
    },
    password: {
      type: String,
      required: 'Password is required',
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
    avatar: String,
    confirm_hash: String,
    last_seen: {
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.virtual('isOnline').get(function (user) {
  return differenceInMinutes(new Date(), user.last_seen) < 5;
});

UserSchema.set('toJSON', {
  virtuals: true,
});

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  user.password = await generatePasswordHash(user.password);
  user.confirm_hash = await generatePasswordHash(new Date().toString());
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
