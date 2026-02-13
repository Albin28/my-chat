const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Socket.io
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('join room', ({ username, room }) => {
    socket.join(room);
    socket.to(room).emit('notification', `User ${username} has entered the mainframe.`);
    socket.emit('notification', `Welcome to the mainframe, ${username}.`);
  });

  socket.on('chat message', ({ msg, room, username }) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    io.to(room).emit('chat message', { msg, username, time });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
    // In a real app we'd track usernames to map socket IDs to names for leave notifications
    // For simplicity/ephemeral nature, we might skip detailed leave messages if not strictly tracking state
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
