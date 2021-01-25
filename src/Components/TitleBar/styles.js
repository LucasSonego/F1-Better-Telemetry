import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  background-color: #ffffff07;
  -webkit-app-region: drag;

  span {
    color: #ffffff77;
    font-size: 14px;
    margin-left: 15px;
  }

  button {
    -webkit-app-region: none;
  }

  .controls {
    button {
      background: #ffffff04;
      border: none;
      outline: none;
      height: 30px;
      width: 40px;
      padding: 0;

      .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .minimize,
      .maximize {
        color: #fffa;
        height: 15px;
        width: 15px;
      }

      .close {
        color: #fffa;
        height: 17px;
        width: 17px;
      }

      transition: 0.3s;
      &:hover {
        background: #fff1;

        .close {
          color: #e74c3c;
        }
      }
    }
  }
`;
