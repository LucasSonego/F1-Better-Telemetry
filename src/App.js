import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import Fonts from "./fonts";
import { Container, Content } from "./styles";
import LapData from "./Components/LapData";
import CarData from "./Components/CarData";
import SessionData from "./Components/SessionData";
import TitleBar from "./Components/TitleBar";

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
      <TitleBar />
      <Content>
        <LapData
          telemetry={telemetry}
          tyreCompound={carStatus?.m_tyreVisualCompound}
        />
        <CarData carStatus={carStatus} carTelemetry={carTelemetry} />
        <SessionData session={session} />
      </Content>
    </Container>
  );
}

export default App;
