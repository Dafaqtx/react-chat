const mongoose = require('mongoose');

mongoose.set('debug', true);

try {
  mongoose.connect('mongodb://localhost:27017/chat', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log(error);
}
