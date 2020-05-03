import express from 'express';
import { createServer } from 'http';
import { config } from 'dotenv';

import './core/db';
import createRoutes from './core/routes';
import createSocket from './core/socket';

const app = express();
const http = createServer(app);
const io = createSocket(http);

config();

createRoutes(app, io);

http.listen(process.env.PORT, () => {
  // tslint:disable-next-line
  console.log(`Server: http://localhost:${process.env.PORT}`);
});
