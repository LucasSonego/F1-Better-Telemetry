import React from "react";

import Fonts from "./fonts";
import { Container } from "./styles";
import LapData from "./Components/LapData";

const telemetry = io.connect("http://localhost:4000");

function App() {
  return (
    <Container>
      <Fonts />
      <LapData telemetry={telemetry} />
    </Container>
  );
}

export default App;
