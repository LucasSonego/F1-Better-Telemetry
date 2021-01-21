import React from "react";
import {
  WiCloudRefresh,
  WiDayCloudy,
  WiDayRainMix,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiRain,
  WiThunderstorm,
} from "react-icons/wi";

import { Container } from "./styles";

function Weather({ session }) {
  function getWeatherIcon(weather) {
    switch (weather) {
      case 0:
        return (
          <>
            <WiDaySunny /> <span>Clear</span>
          </>
        );
      case 1:
        return (
          <>
            <WiDaySunnyOvercast /> <span>Overcast</span>
          </>
        );
      case 2:
        return (
          <>
            <WiDayCloudy /> <span>Cloudy</span>
          </>
        );

      case 3:
        return (
          <>
            <WiDayRainMix />
            <span>Light Rain</span>
          </>
        );
      case 4:
        return (
          <>
            <WiRain />
            <span>Heavy Rain</span>
          </>
        );
      case 5:
        return (
          <>
            <WiThunderstorm />
            <span>Storm</span>
          </>
        );
      default:
        return (
          <>
            <WiCloudRefresh />
            <span>no data...</span>
          </>
        );
    }
  }

  return (
    <Container>
      <div className="current-weather">
        {getWeatherIcon(session?.m_weather)}
      </div>
      <div className="temps">
        <p>{`Air: ${session?.m_airTemperature || "0"}ºC`}</p>
        <p>{`Track: ${session?.m_trackTemperature || 0}ºC`}</p>
      </div>
    </Container>
  );
}

export default Weather;
