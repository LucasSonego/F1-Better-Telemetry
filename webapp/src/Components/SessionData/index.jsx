import React from "react";

import { Container } from "./styles";

import SessionType from "./SessionType";

function SessionData({ session }) {
  return (
    <Container>
      {session !== undefined && (
        <>
          <SessionType session={session} />
        </>
      )}
    </Container>
  );
}

export default SessionData;
