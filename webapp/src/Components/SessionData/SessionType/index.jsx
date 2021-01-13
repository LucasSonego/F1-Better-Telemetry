import React from "react";

import { Container } from "./styles";

function SessionType({ session }) {
  function getSessionType(identifier) {
    if (identifier) {
      if (identifier < 5) {
        if (identifier < 4) {
          return `FP${identifier}`;
        } else return "Practice";
      } else if (identifier < 8) {
        return `Q${identifier - 4}`;
      } else return "Qualifying";
    }
  }

  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${minutes || 0}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  }

  return (
    <Container>
      {session?.m_sessionType && session?.m_sessionType < 9 && (
        <>
          <span>{getSessionType(session.m_sessionType)}</span>
          <div className="time">
            <h2>{formatTime(session?.m_sessionTimeLeft)}</h2>
          </div>
        </>
      )}
    </Container>
  );
}

export default SessionType;
