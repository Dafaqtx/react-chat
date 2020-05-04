const socketIo = require('socket.io');

const createSocket = http => {
  const io = socketIo(http);

  io.on('connection', (socket) => {
    socket.on('DIALOGS:JOIN', (dialogId) => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
    });
    socket.on('DIALOGS:TYPING', (obj) => {
      socket.broadcast.emit('DIALOGS:TYPING', obj);
    });
  });

  return io;
};

exports.module = createSocket
