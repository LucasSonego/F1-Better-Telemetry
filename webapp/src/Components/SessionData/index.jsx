import React from "react";

import { Container } from "./styles";

import SessionType from "./SessionType";
import Weather from "./Weather";

function SessionData({ session }) {
  return (
    <Container>
      {session !== undefined && (
        <>
          <SessionType session={session} />
          <Weather session={session} />
        </>
      )}
    </Container>
  );
}

export default SessionData;
