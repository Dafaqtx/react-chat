import socket from 'socket.io';
import http from 'http';

/* tslint:disable */
export default (http: http.Server) => {
  const io = socket(http);

  io.on('connection', (socket: socket.Socket) => {
    console.log(socket);
  });

  return io;
};
/* tslint:enable */
