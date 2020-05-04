const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadFileSchema = new Schema(
  {
    filename: String,
    size: Number,
    ext: String,
    url: String,
    message: { type: Schema.Types.ObjectId, ref: 'Message', require: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  },
  {
    timestamps: true,
  }
);

const UploadFileModel = mongoose.model('UploadFile', UploadFileSchema);

module.exports = UploadFileModel;
