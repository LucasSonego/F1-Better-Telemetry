import React from "react";

import { Container } from "./styles";
import frontWing from "../../assets/Car/frontWing.svg";
import engine from "../../assets/Car/engine.svg";
import gearbox from "../../assets/Car/gearbox.svg";

const F_RIGHT = 3;
const F_LEFT = 2;
const R_RIGHT = 1;
const R_LEFT = 0;

function Car({
  frontWingDamage,
  rearWingDamage,
  tyreTemperatures,
  brakeTemperatures,
  engineTemperature,
  gearboxDamage,
  drsFault,
}) {
  return (
    <Container>
      <div className="front-wing">
        <div className="damage">{frontWingDamage?.left || "0"}%</div>
        <div
          className={`
        left ${
          frontWingDamage?.left !== null && frontWingDamage?.left !== undefined
            ? frontWingDamage.left < 5
              ? "green-mask"
              : frontWingDamage.left < 15
              ? "yellow-mask"
              : frontWingDamage.left < 25
              ? "yellow-orange-mask"
              : frontWingDamage.left < 50
              ? "orange-mask"
              : "red-mask"
            : "normal-mask"
        }
        `}
        >
          <img src={frontWing} alt="" srcSet="" />
        </div>
        <div
          className={`right
        ${
          frontWingDamage?.right !== null &&
          frontWingDamage?.right !== undefined
            ? frontWingDamage.right < 5
              ? "green-mask"
              : frontWingDamage.right < 10
              ? "yellow-mask"
              : frontWingDamage.right < 25
              ? "yellow-orange-mask"
              : frontWingDamage.right < 50
              ? "orange-mask"
              : "red-mask"
            : "normal-mask"
        }`}
        >
          <img src={frontWing} alt="" srcSet="" />
        </div>
        <div className="damage">{frontWingDamage?.right || "0"}%</div>
      </div>
      <div className="front-tyres">
        <div
          className={`tyre left-tyre 
          ${
            tyreTemperatures &&
            tyreTemperatures[F_LEFT] !== null &&
            tyreTemperatures[F_LEFT] !== undefined
              ? tyreTemperatures[F_LEFT] < 75
                ? "blue"
                : tyreTemperatures[F_LEFT] < 103
                ? "green"
                : tyreTemperatures[F_LEFT] < 106
                ? "yellow"
                : "red"
              : "white"
          }`}
        ></div>
        <div
          className={`brake left-brake 
          ${
            brakeTemperatures &&
            brakeTemperatures[F_LEFT] !== null &&
            brakeTemperatures[F_LEFT] !== undefined
              ? brakeTemperatures[F_LEFT] < 100
                ? "blue"
                : brakeTemperatures[F_LEFT] < 650
                ? "green"
                : brakeTemperatures[F_LEFT] < 800
                ? "yellow"
                : "red"
              : "white"
          }`}
        ></div>
        <div
          className={`brake right-brake
          ${
            brakeTemperatures &&
            brakeTemperatures[F_LEFT] !== null &&
            brakeTemperatures[F_LEFT] !== undefined
              ? brakeTemperatures[F_LEFT] < 100
                ? "blue"
                : brakeTemperatures[F_LEFT] < 650
                ? "green"
                : brakeTemperatures[F_LEFT] < 800
                ? "yellow"
                : "red"
              : "white"
          }`}
        ></div>
        <div
          className={`tyre right-tyre 
          ${
            tyreTemperatures &&
            tyreTemperatures[F_RIGHT] !== null &&
            tyreTemperatures[F_RIGHT] !== undefined
              ? tyreTemperatures[F_RIGHT] < 75
                ? "blue"
                : tyreTemperatures[F_RIGHT] < 103
                ? "green"
                : tyreTemperatures[F_RIGHT] < 106
                ? "yellow"
                : "red"
              : "white"
          }`}
        ></div>
      </div>
      <div className="engine">
        <img
          src={engine}
          alt=""
          srcSet=""
          className={`${
            engineTemperature
              ? engineTemperature < 125
                ? ""
                : "yellow-mask"
              : ""
          }`}
        />
      </div>
      <div className="back">
        <div
          className={`tyre left-tyre 
         ${
           tyreTemperatures &&
           tyreTemperatures[R_LEFT] !== null &&
           tyreTemperatures[R_LEFT] !== undefined
             ? tyreTemperatures[R_LEFT] < 75
               ? "blue"
               : tyreTemperatures[R_LEFT] < 103
               ? "green"
               : tyreTemperatures[R_LEFT] < 106
               ? "yellow"
               : "red"
             : "white"
         }`}
        ></div>
        <div
          className={`brake left-brake
        ${
          brakeTemperatures &&
          brakeTemperatures[R_LEFT] !== null &&
          brakeTemperatures[R_LEFT] !== undefined
            ? brakeTemperatures[R_LEFT] < 100
              ? "blue"
              : brakeTemperatures[R_LEFT] < 650
              ? "green"
              : brakeTemperatures[R_LEFT] < 800
              ? "yellow"
              : "red"
            : "white"
        }
        `}
        ></div>
        <img
          src={gearbox}
          alt=""
          srcSet=""
          className={`${
            gearboxDamage
              ? gearboxDamage < 40
                ? ""
                : gearboxDamage < 60
                ? "yellow-mask"
                : gearboxDamage < 80
                ? "red-mask"
                : "orange-mask"
              : ""
          }`}
        />
        <div
          className={`brake right-brake
        ${
          brakeTemperatures &&
          brakeTemperatures[R_RIGHT] !== null &&
          brakeTemperatures[R_RIGHT] !== undefined
            ? brakeTemperatures[R_RIGHT] < 100
              ? "blue"
              : brakeTemperatures[R_RIGHT] < 650
              ? "green"
              : brakeTemperatures[R_RIGHT] < 800
              ? "yellow"
              : "red"
            : "white"
        }
        `}
        ></div>
        <div
          className={`tyre right-tyre 
        ${
          tyreTemperatures &&
          tyreTemperatures[R_RIGHT] !== null &&
          tyreTemperatures[R_RIGHT] !== undefined
            ? tyreTemperatures[R_RIGHT] < 75
              ? "blue"
              : tyreTemperatures[R_RIGHT] < 103
              ? "green"
              : tyreTemperatures[R_RIGHT] < 106
              ? "yellow"
              : "red"
            : "white"
        }`}
        ></div>
      </div>
      <div
        className={`rear-wing
        ${
          rearWingDamage !== undefined && drsFault !== undefined
            ? rearWingDamage || drsFault
              ? "red"
              : "green"
            : "white"
        }
      `}
      ></div>
    </Container>
  );
}

export default Car;
