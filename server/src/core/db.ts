import mongoose from 'mongoose';

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/chat', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
