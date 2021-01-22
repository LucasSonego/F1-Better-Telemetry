import React from "react";
import { remote } from "electron";

import {
  VscClose,
  VscChromeMaximize,
  VscChromeMinimize,
} from "react-icons/vsc";
import { Container } from "./styles";

function TitleBar() {
  return (
    <Container>
      <span>F1 Better Telemetry</span>
      <div className="controls">
        <button onClick={() => remote.getCurrentWindow().minimize()}>
          <div className="button-content">
            <VscChromeMinimize className="minimize" />
          </div>
        </button>
        <button
          onClick={() =>
            remote.getCurrentWindow().isMaximized()
              ? remote.getCurrentWindow().unmaximize()
              : remote.getCurrentWindow().maximize()
          }
        >
          <div className="button-content">
            <VscChromeMaximize className="maximize" />
          </div>
        </button>
        <button onClick={() => remote.getCurrentWindow().close()}>
          <div className="button-content">
            <VscClose className="close" />
          </div>
        </button>
      </div>
    </Container>
  );
}

export default TitleBar;
