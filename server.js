const handler = require("serve-handler");
const http = require("http");
const server = http.createServer((request, response) => {
  return handler(request, response, { public: "client" });
});
const io = require("socket.io")(server);

server.listen(3000, function () {
  // console.log("listening on *:3000");

  console.log("listening on *:" + (process.env.PORT || 3000));

  io.on("connection", function (socket) {
    console.log("a client connected: " + socket.id);

    socket.on("directive", function (message) {
      console.log(message); //1.
      socket.broadcast.emit("screen", message); //2.
    });
  });
});

// const express = require("express");
// const http = require("http");
// const socketIo = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Serve static files from the 'client' directory
// app.use(express.static("client"));

// io.on("connection", function (socket) {
//   console.log("a client connected: " + socket.id);

//   socket.on("directive", function (message) {
//     console.log(message); //1.
//     socket.broadcast.emit("screen", message); //2.
//   });
// });

// const PORT = process.env.PORT || 3000;
// server.listen(PORT, function () {
//   console.log(`listening on *:${PORT}`);
// });
