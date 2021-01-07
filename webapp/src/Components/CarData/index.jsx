import React from "react";
import { Container } from "./styles";
import Car from "../Car";
function CarData({ carStatus, carTelemetry }) {
  return (
    <Container>
        <Car
          frontWingDamage={{
            left: carStatus?.m_frontLeftWingDamage,
            right: carStatus?.m_frontRightWingDamage,
          }}
          rearWingDamage={carStatus?.m_rearWingDamage}
          tyreTemperatures={carTelemetry?.m_tyresInnerTemperature}
          brakeTemperatures={carTelemetry?.m_brakesTemperature}
          engineTemperature={carTelemetry?.m_engineTemperature}
          gearboxDamage={carStatus?.m_gearBoxDamage}
          drsFault={carStatus?.m_drsFault}
        />
    </Container>
  );
}

export default CarData;
