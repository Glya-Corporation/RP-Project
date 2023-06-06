const app = require('./app');
const http = require('http');
const swaggerDocs = require('../swagger');
require('dotenv').config();

const socketIO = require('socket.io');

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*'
  }
});

app.set('io', io);
require('./socket.io')(io);
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || 'http://localhost:8000';
server.listen(PORT, () => {
  console.log(`Runing server in: ${HOST}`);
  swaggerDocs(app, PORT);
});
