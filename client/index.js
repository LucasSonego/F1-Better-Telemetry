const app = require("express")();
const http = require("http").createServer(app);
const server = require("socket.io")(http);

const { F1TelemetryClient, constants } = require("f1-telemetry-client");
const F1Telemetry = new F1TelemetryClient({ bigintEnabled: false });

const { PACKETS } = constants;

server.on("connection", socket => {
  console.log("New client connected");
});

F1Telemetry.start();

http.listen(4000);
