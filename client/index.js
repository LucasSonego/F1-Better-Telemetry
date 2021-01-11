const app = require("express")();
const http = require("http").createServer(app);
const server = require("socket.io")(http);

const { F1TelemetryClient, constants } = require("f1-telemetry-client");
const F1Telemetry = new F1TelemetryClient({ bigintEnabled: false });

const { PACKETS } = constants;

let playerCarId = null;

server.on("connection", socket => {
  console.log("New client connected");

  socket.on("lapData", data => {
    server.sockets.emit("lapData", data);
  });
  socket.on("playerCarId", data => {
    server.sockets.emit("playerCarId", data);
  });
  socket.on("carStatus", data => {
    server.sockets.emit("carStatus", data);
  });
  socket.on("carTelemetry", data => {
    server.sockets.emit("carTelemetry", data);
  });
  socket.on("session", data => {
    server.sockets.emit("session", data);
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

let currentLap, currentSector;
F1Telemetry.on(PACKETS.lapData, data => {
  if (playerCarId !== null) {
    if (
      data.m_lapData[playerCarId].m_currentLapNum !== currentLap ||
      data.m_lapData[playerCarId].m_sector !== currentSector
    ) {
      client.emit("lapData", data.m_lapData[playerCarId]);
      currentLap = data.m_lapData[playerCarId].m_currentLapNum;
      currentSector = data.m_lapData[playerCarId].m_sector;
    }
  }
});

F1Telemetry.on(PACKETS.carStatus, data => {
  if (playerCarId !== null) {
    client.emit("carStatus", data.m_carStatusData[playerCarId]);
  }
});

F1Telemetry.on(PACKETS.carTelemetry, data => {
  if (playerCarId !== null) {
    client.emit("carTelemetry", data.m_carTelemetryData[playerCarId]);
  }
});

F1Telemetry.on(PACKETS.session, data => client.emit("session", data));

F1Telemetry.start();

http.listen(4000);
