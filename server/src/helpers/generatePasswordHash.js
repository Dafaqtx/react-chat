const bcrypt = require('bcrypt');

exports.module = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);

      resolve(hash);
    });
  });
};
