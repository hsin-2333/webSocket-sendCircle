const handler = require("serve-handler");
const http = require("http");
const server = http.createServer((request, response) => {
  return handler(request, response, { public: "client" });
});
const io = require("socket.io")(server);

server.listen(3000, function () {
  console.log("listening on *:3000");

  io.on("connection", function (socket) {
    console.log("a client connected: " + socket.id);

    socket.on("directive", function (message) {
      console.log(message); //1.
      socket.broadcast.emit("screen", message); //2.
    });
  });
});
