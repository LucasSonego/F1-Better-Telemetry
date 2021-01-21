import React, { useEffect, useState } from "react";
import { MdClearAll } from "react-icons/md";

import { Container, Tyre } from "./styles";
// import testLapData from "../../exampleData/LapData";

function LapData({ telemetry, tyreCompound }) {
  // const [laps, setLaps] = useState(testLapData);
  const [laps, setLaps] = useState();

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
          if (laps[sameLap + 1]) {
            updatedLaps.splice(sameLap + 1, laps.length - 1);
          }
          if (updatedLaps.length > 1) {
            updatedLaps[[...updatedLaps].length - 2] = {
              ...updatedLaps[[...updatedLaps].length - 2],
              m_lapTime: data.m_lastLapTime,
              m_sector3TimeInMS:
                data.m_lastLapTime * 1000 -
                (updatedLaps[[...updatedLaps].length - 2].m_sector1TimeInMS +
                  updatedLaps[[...updatedLaps].length - 2].m_sector2TimeInMS),
            };
          }
          updatedLaps[sameLap] = { ...data, m_tyreCompound: tyreCompound };
        } else {
          updatedLaps[[...laps].length - 1] = {
            ...updatedLaps[[...laps].length - 1],
            m_lapTime: data.m_lastLapTime,
            m_sector3TimeInMS:
              data.m_lastLapTime * 1000 -
              (updatedLaps[[...laps].length - 1].m_sector1TimeInMS +
                updatedLaps[[...laps].length - 1].m_sector2TimeInMS),
            m_tyreCompound: tyreCompound,
          };
          updatedLaps.push({ ...data, m_tyreCompound: tyreCompound });
        }
      } else {
        updatedLaps.push({ ...data, m_tyreCompound: tyreCompound });
      }
      setLaps(updatedLaps);
    });
  }, [laps, telemetry, tyreCompound]);

  function formattedTime(time) {
    let minutes = Math.floor(Math.floor(time / 60));
    if (!minutes) {
      return Number(time).toFixed(3);
    }
    let remainingTime = (time - minutes * 60).toFixed(3);
    if (remainingTime < 10) {
      remainingTime = `0${remainingTime}`;
    }

    return `${minutes}:${remainingTime}`;
  }

  function getTyreCompound(compoundIdentifier) {
    if (compoundIdentifier) {
      switch (compoundIdentifier) {
        case 7:
          return (
            <Tyre compound="intermediate">
              <span>I</span>
            </Tyre>
          );
        case 8:
          return (
            <Tyre compound="wet">
              <span>W</span>
            </Tyre>
          );
        case 16:
          return (
            <Tyre compound="soft">
              <span>S</span>
            </Tyre>
          );
        case 17:
          return (
            <Tyre compound="medium">
              <span>M</span>
            </Tyre>
          );
        case 18:
          return (
            <Tyre compound="hard">
              <span>H</span>
            </Tyre>
          );
        default:
          return (
            <Tyre>
              <span>?</span>
            </Tyre>
          );
      }
    } else
      return (
        <Tyre>
          <span>?</span>
        </Tyre>
      );
  }

  return (
    <Container>
      <button className="clear" onClick={() => setLaps([])}>
        <MdClearAll /> Clear
      </button>
      {laps &&
        laps
          .slice(0)
          .reverse()
          .map((lap, index) => (
            <div className="lap" key={index}>
              <div className="general">
                <div className="lap-number">
                  <span>{lap.m_currentLapNum}</span>
                </div>
                <div className="lap-time">
                  <span>
                    {lap.m_lapTime ? (
                      <>
                        {formattedTime(lap.m_lapTime)}
                        {"   "}
                        {lap.m_lastLapTime ? (
                          <>
                            {lap.m_lastLapTime < lap.m_lapTime ? (
                              <div className="diff red">
                                +
                                {formattedTime(
                                  lap.m_lapTime - lap.m_lastLapTime
                                )}
                              </div>
                            ) : (
                              <div className="diff green">
                                -
                                {formattedTime(
                                  lap.m_lastLapTime - lap.m_lapTime
                                )}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="diff neutral">+0.000</div>
                        )}
                      </>
                    ) : (
                      "--:--"
                    )}
                  </span>
                </div>
                <span>{getTyreCompound(lap.m_tyreCompound)}</span>
              </div>
              <hr />
              <div className="sectors">
                {lap.m_sector1TimeInMS ? (
                  <span className="time">
                    {formattedTime(lap.m_sector1TimeInMS / 1000)}
                  </span>
                ) : (
                  <span className="sector">S1</span>
                )}
                <span>
                  {lap.m_sector2TimeInMS ? (
                    <span className="time">
                      {formattedTime(lap.m_sector2TimeInMS / 1000)}
                    </span>
                  ) : (
                    <span className="sector">S2</span>
                  )}
                </span>
                <span>
                  {lap.m_sector3TimeInMS ? (
                    <span className="time">
                      {formattedTime(lap.m_sector3TimeInMS / 1000)}
                    </span>
                  ) : (
                    <span className="sector">S3</span>
                  )}
                </span>
              </div>
            </div>
          ))}
    </Container>
  );
}

export default LapData;
