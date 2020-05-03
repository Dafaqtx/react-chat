import mongoose, { Schema, Document } from 'mongoose'
import { isEmail } from 'validator'
import { generatePasswordHash } from '../helpers'

export interface IUser extends Document {
  email: string
  fullName: string
  password: string
  confirmed: boolean
  avatar?: string
  confirm_hash?: string
  last_seen?: Date
}

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
)

UserSchema.pre('save', function(next) {
  const user: any = this;
  // const user: IUser = this;

  if (!this.isModified('password')) return next();

  generatePasswordHash(user.password)
    .then(hash => {
      user.password = String(hash);
      next();
    })
    .catch(err => {
      next(err);
    });
});

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel
