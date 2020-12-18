import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 400px !important;
  min-width: 400px !important;
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: min-content;
  color: #fff;
  height: 100vh;
  max-height: 100vh;
  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ffffff05;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fff1;
    border-radius: 5px;
  }

  button {
    background: #ffffff05;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 5px;
    width: min-content;
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    color: #eee;
    svg {
      margin-right: 5px;
      height: 20px;
      width: 20px;
    }

    transition: 0.3s;
    &:hover {
      background-color: #ffffff10;
    }
  }

  .lap {
    padding: 10px;
    background-color: #fff1;
    border-radius: 5px 0 15px 0;

    .general {
      font-size: 18px;
      display: flex;

      .lap-number {
        font-family: "F1 Bold";
        min-width: 30px;
      }

      .lap-time {
        width: 100%;
        text-align: center;

        span {
          display: flex;
          justify-content: center;
          align-items: center;

          .diff {
            font-size: 16px;
            margin-left: 15px;
          }

          .red {
            color: #ff5f4d;
          }

          .green {
            color: #2ecc71;
          }

          .neutral {
            color: #fff3;
          }
        }
      }
    }
    hr {
      border: 0;
      height: 1px;
      background-image: linear-gradient(to right, #fff0, #fff3, #fff3, #fff0);
    }
    .sectors {
      display: flex;
      justify-content: space-evenly;

      span {
        width: 100%;
        text-align: center;
      }

      .time {
        color: #fff9;
      }

      .sector {
        color: #fff3;
      }
    }
  }
`;
