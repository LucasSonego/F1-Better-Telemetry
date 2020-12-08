const app = require("express")();
const http = require("http").createServer(app);
const server = require("socket.io")(http);

const { F1TelemetryClient, constants } = require("f1-telemetry-client");
const F1Telemetry = new F1TelemetryClient({ bigintEnabled: false });

const { PACKETS } = constants;

let playerCarId = null;

server.on("connection", socket => {
  console.log("New client connected");

  socket.on("playerCarId", data => {
    server.sockets.emit("playerCarId", data);
  });
});

const io = require("socket.io-client");
const client = io.connect("http://localhost:4000");

F1Telemetry.on(PACKETS.participants, data => {
  if (data && data.m_header.m_playerCarIndex !== playerCarId) {
    playerCarId = data.m_header.m_playerCarIndex;
    client.emit("playerCarId", data.m_header.m_playerCarIndex);
    console.log("Player car id: " + playerCarId);
  }
});
});

F1Telemetry.start();

http.listen(4000);
