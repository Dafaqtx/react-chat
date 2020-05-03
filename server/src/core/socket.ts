import socketIo from 'socket.io';
import http from 'http';

export default (xhr: http.Server) => {
  const io = socketIo(xhr);

  io.on('connection', (socket: any) => {
    socket.on('DIALOGS:JOIN', (dialogId: string) => {
      socket.dialogId = dialogId;
      socket.join(dialogId);
    });
    socket.on('DIALOGS:TYPING', (obj: any) => {
      socket.broadcast.emit('DIALOGS:TYPING', obj);
    });
  });

  return io;
};
