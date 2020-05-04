const socketIo = require('socket.io');

module.exports = http => {
  const io = socketIo(http);

  io.on('connection', socket => {
    socket.on('DIALOGS:JOIN', dialogId => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
    });
    socket.on('DIALOGS:TYPING', obj => {
      socket.broadcast.emit('DIALOGS:TYPING', obj);
    });
  });

  return io;
};
