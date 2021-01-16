import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Fonts from "./fonts";
import { Container } from "./styles";
import LapData from "./Components/LapData";
import CarData from "./Components/CarData";
import SessionData from "./Components/SessionData";

const telemetry = io.connect("http://localhost:4000");

function App() {
  let [carStatus, setCarStatus] = useState();
  let [carTelemetry, setCarTelemetry] = useState();
  let [session, setSession] = useState();

  useEffect(() => {
    telemetry.on("carStatus", data => {
      setCarStatus(data);
    });
    telemetry.on("carTelemetry", data => {
      setCarTelemetry(data);
    });
    telemetry.on("session", data => {
      setSession(data);
    });
  }, []);

  return (
    <Container>
      <Fonts />
      <LapData telemetry={telemetry} />
      <CarData carStatus={carStatus} carTelemetry={carTelemetry} />
      <SessionData session={session} />
    </Container>
  );
}

export default App;
