var express = require("express");
var net = require("net");
var app = express();
// var http = require('http').createServer(app);
// var io = require('socket.io')(http);
const settings = {
  host: "192.168.145.73",
  port: 8081,
};

const server = new net.createServer((client) => {
  client.setEncoding("utf8"); // Delete this line
  server.on("connection", function (client) {
    client.write("true");
    console.log("Client Connected!");
  });
  client.on("data", function (data) {
    try {
      console.log("got chunk of " + data.length);
      console.log(data);
    } catch (ex) {
      console.error("Er!" + ex);
    }
  });

  client.on("end", () => {
    console.log("client disconnected");
  });
});

server.on("error", (err) => {
  throw err;
});
server.listen(settings.port, settings.host, () => {
  console.log("Server running on port " + settings.port);
});
