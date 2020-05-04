const express = require("express");
const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

require('./core/db');
const createRoutes = require('./core/routes');
const createSocket = require('./core/socket');

const app = express();
const server = http.createServer(app);
const io = createSocket(http);

createRoutes(app, io);

const PORT = process.env.PORT || 3003;

server.listen(PORT, function () {
  console.log(`Server: http://localhost:${PORT}`);
});
