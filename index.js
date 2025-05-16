const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const users = {}; // username => socket.id

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Register a new user
  socket.on('register', (username) => {
    users[username] = socket.id;
    io.emit('userList', Object.keys(users)); // send updated user list to all
  });

  // Join a group chat room
  socket.on('joinRoom', (room) => {
    socket.join(room);
    socket.to(room).emit('message', `${socket.id} joined room ${room}`);
  });

  // Send message to room
  socket.on('roomMessage', ({ room, message, sender }) => {
    io.to(room).emit('roomMessage', { message, sender });
  });

  // Send private message
  socket.on('privateMessage', ({ toUser, message, sender }) => {
    const toSocketId = users[toUser];
    if (toSocketId) {
      io.to(toSocketId).emit('privateMessage', { message, sender });
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    for (const [username, id] of Object.entries(users)) {
      if (id === socket.id) {
        delete users[username];
        break;
      }
    }
    io.emit('userList', Object.keys(users));
    console.log('User disconnected:', socket.id);
  });
});

server.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});