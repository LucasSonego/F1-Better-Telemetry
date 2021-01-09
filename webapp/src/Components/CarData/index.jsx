import React from "react";
import { BsCircleFill, BsCircle } from "react-icons/bs";

import { Container } from "./styles";
import Car from "../Car";
import brakeIcon from "../../assets/brakeIcon.svg";
import engineIcon from "../../assets/engineIcon.svg";
import gearboxIcon from "../../assets/gearboxIcon.svg";

const F_RIGHT = 3;
const F_LEFT = 2;
const R_RIGHT = 1;
const R_LEFT = 0;

function CarData({ carStatus, carTelemetry }) {
  return (
    <Container>
      <div className="car">
        <div className="left-container">
          <div className="front-tyre">
            <p>{carStatus?.m_tyresDamage[F_LEFT] || "0"}%</p>
            <span className="inner">
              {carTelemetry?.m_tyresInnerTemperature[F_LEFT] || "0"} ºC
              <BsCircleFill />
            </span>
            <span className="surface">
              {carTelemetry?.m_tyresSurfaceTemperature[F_LEFT] || "0"} ºC
              <BsCircle />
            </span>
            <span className="pressure">
              {carTelemetry
                ? Number(carTelemetry?.m_tyresPressure[F_LEFT]).toFixed(1)
                : 0}
              psi
            </span>
            <span className="brake">
              {carTelemetry?.m_brakesTemperature[F_LEFT] || "0"} ºC
              <img src={brakeIcon} alt="" srcSet="" />
            </span>
          </div>
          <div className="engine-data">
            <div>
              <p>{carStatus?.m_engineDamage || "0"}%</p>
              <p>{carTelemetry?.m_engineTemperature || "0"} ºC</p>
            </div>
            <img src={engineIcon} alt="" srcSet="" />
          </div>
          <div className="rear-tyre">
            <p>{carStatus?.m_tyresDamage[R_LEFT] || "0"}%</p>
            <span className="inner">
              {carTelemetry?.m_tyresInnerTemperature[R_LEFT] || "0"} ºC
              <BsCircleFill />
            </span>
            <span className="surface">
              {carTelemetry?.m_tyresSurfaceTemperature[R_LEFT] || "0"} ºC
              <BsCircle />
            </span>
            <span className="pressure">
              {carTelemetry
                ? Number(carTelemetry?.m_tyresPressure[F_LEFT]).toFixed(1)
                : 0}
              psi
            </span>
            <span className="brake">
              {carTelemetry?.m_brakesTemperature[R_LEFT] || "0"} ºC
              <img src={brakeIcon} alt="" srcSet="" />
            </span>
          </div>
        </div>
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
        <div className="right-container">
          <div className="front-tyre">
            <p>{carStatus?.m_tyresDamage[F_RIGHT] || "0"}%</p>
            <span className="inner">
              <BsCircleFill />
              {carTelemetry?.m_tyresInnerTemperature[F_RIGHT] || "0"} ºC
            </span>
            <span className="surface">
              <BsCircle />
              {carTelemetry?.m_tyresSurfaceTemperature[F_RIGHT] || "0"} ºC
            </span>
            <span className="pressure">
              {carTelemetry
                ? Number(carTelemetry?.m_tyresPressure[F_LEFT]).toFixed(1)
                : 0}
              psi
            </span>
            <span className="brake">
              <img src={brakeIcon} alt="" srcSet="" />
              {carTelemetry?.m_brakesTemperature[F_RIGHT] || "0"} ºC
            </span>
          </div>
          <div className="gearbox">
            <img src={gearboxIcon} alt="" srcSet="" />
            <div>
              <p>{carStatus?.m_gearBoxDamage || 0}%</p>
            </div>
          </div>
          <div className="rear-tyre">
            <p>{carStatus?.m_tyresDamage[R_RIGHT] || "0"}%</p>
            <span className="inner">
              <BsCircleFill />
              {carTelemetry?.m_tyresInnerTemperature[R_RIGHT] || "0"} ºC
            </span>
            <span className="surface">
              <BsCircle />
              {carTelemetry?.m_tyresSurfaceTemperature[R_RIGHT] || "0"} ºC
            </span>
            <span className="pressure">
              {carTelemetry
                ? Number(carTelemetry?.m_tyresPressure[F_LEFT]).toFixed(1)
                : 0}
              psi
            </span>
            <span className="brake">
              <img src={brakeIcon} alt="" srcSet="" />
              {carTelemetry?.m_brakesTemperature[R_RIGHT] || "0"} ºC
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CarData;
