import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import testLapData from "../../exampleData/LapData";

function LapData({ telemetry }) {
  const [laps, setLaps] = useState(testLapData);
  // const [laps, setLaps] = useState();

  useEffect(() => {
    telemetry.once("lapData", data => {
      let updatedLaps = [];
      if (laps) {
        updatedLaps = [...laps];
      }
      if (laps && [...laps].length > 0) {
        let sameLap = laps.findIndex(
          lap => lap.m_currentLapNum === data.m_currentLapNum
        );
        if (sameLap >= 0) {
          if (laps.length > 1) {
            updatedLaps[[...laps].length - 2] = {
              ...updatedLaps[[...laps].length - 2],
              m_lapTime: data.m_lastLapTime,
              m_sector3TimeInMS:
                data.m_lastLapTime * 1000 -
                (updatedLaps[[...laps].length - 2].m_sector1TimeInMS +
                  updatedLaps[[...laps].length - 2].m_sector2TimeInMS),
            };
          }
          updatedLaps[sameLap] = data;
        } else {
          updatedLaps[[...laps].length - 1] = {
            ...updatedLaps[[...laps].length - 1],
            m_lapTime: data.m_lastLapTime,
            m_sector3TimeInMS:
              data.m_lastLapTime * 1000 -
              (updatedLaps[[...laps].length - 1].m_sector1TimeInMS +
                updatedLaps[[...laps].length - 1].m_sector2TimeInMS),
          };
          updatedLaps.push(data);
        }
      } else {
        updatedLaps.push(data);
      }
      setLaps(updatedLaps);
    });
  }, [laps, telemetry]);

  return (
    <Container>
    </Container>
  );
}

export default LapData;
