import styled from "styled-components";
import chassis from "../../assets/Car/chassis.svg";

export const Container = styled.div`
  background: url(${chassis}) no-repeat center;
  width: 270px;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .front-wing {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .damage {
      min-width: 50px;
      margin: 15px 5px;
      display: flex;
      justify-content: center;
      color: #fff;
    }

    .right {
      img {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }
  }

  .front-tyres {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .tyre {
      box-sizing: border-box;
      height: 55px;
      width: 40px;
      border-radius: 5px;
    }
    .brake {
      box-sizing: border-box;
      height: 30px;
      width: 12px;
      margin: 0 5px;
    }

    .left-brake {
      margin-right: 100px;
    }
  }

  .engine {
    display: flex;
    justify-content: center;
    margin-top: 130px;
  }

  .back {
    display: flex;
    justify-content: center;

    .tyre {
      box-sizing: border-box;
      height: 55px;
      width: 45px;
      border-radius: 5px;
      margin-top: 20px;
    }

    .brake {
      box-sizing: border-box;
      height: 30px;
      width: 14px;
      margin-top: 33px;
    }

    .left-brake {
      margin-left: 5px;
      margin-right: 30px;
    }

    .right-brake {
      margin-left: 35px;
      margin-right: 5px;
    }

    img {
      align-self: flex-start;
      margin-top: 2px;
      margin-left: 5px;
    }
  }

  .rear-wing {
    box-sizing: border-box;
    margin-top: 20px;
    height: 35px;
    width: 105px;
  }

  .white {
    border: 3px solid #ddd;
    background: #dddddd88;
  }

  .blue {
    border: 3px solid #00a8ff;
    background: #00a8ff88;
  }

  .green {
    border: 3px solid #44bd32;
    background: #44bd3288;
  }

  .yellow {
    border: 3px solid #fbc531;
    background: #fbc53188;
  }

  .red {
    border: 3px solid #e84118;
    background: #e8411888;
  }

  .normal-mask {
    filter: invert(99%) sepia(3%) saturate(168%) hue-rotate(254deg)
      brightness(111%) contrast(73%);
  }

  .green-mask {
    filter: invert(67%) sepia(13%) saturate(2540%) hue-rotate(65deg)
      brightness(90%) contrast(85%);
  }
  .yellow-mask {
    filter: invert(80%) sepia(85%) saturate(420%) hue-rotate(9deg)
      brightness(106%) contrast(97%);
  }

  .yellow-orange-mask {
    filter: invert(85%) sepia(55%) saturate(1892%) hue-rotate(331deg)
      brightness(102%) contrast(97%);
  }

  .orange-mask {
    filter: invert(69%) sepia(16%) saturate(5643%) hue-rotate(337deg)
      brightness(101%) contrast(97%);
  }

  .orange-red-mask {
    filter: invert(51%) sepia(40%) saturate(3554%) hue-rotate(337deg)
      brightness(96%) contrast(106%);
  }

  .red-mask {
    filter: invert(34%) sepia(39%) saturate(6846%) hue-rotate(355deg)
      brightness(95%) contrast(90%);
  }
`;
