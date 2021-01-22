import styled from "styled-components";

export const Container = styled.div`
  .car {
    padding: 0 20px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .left-container {
      min-width: 100px;
    }
    .right-container {
      min-width: 100px;
    }

    .data {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      color: #fff;

      svg {
        height: 20px;
        width: 20px;
      }
    }

    .left-data {
      svg {
        margin-left: 10px;
      }
    }
    .right-data {
      svg {
        margin-right: 10px;
      }
    }
  }

  .left-container,
  .right-container {
    margin-top: 70px;
    color: #fff;

    .front-tyre,
    .rear-tyre {
      min-height: 90px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      p {
        font-size: 18px;
        margin: 0 0 5px 0;
      }

      span {
        display: flex;
        align-items: center;
      }

      svg {
        height: 12px;
        width: 12px;
      }

      img {
        height: 16px;
        width: 16px;
      }

      .surface,
      .pressure {
        font-size: 12px;
      }

      .brake {
        margin-top: 6px;
      }
    }
  }

  .gearbox,
  .engine-data {
    height: 50px;
    margin-top: 100px;
    display: flex;
    align-items: center;
    p {
      margin: 0;
    }
  }

  .rear-tyre {
    margin-top: 50px;
  }

  .left-container {
    .front-tyre,
    .rear-tyre {
      align-items: flex-end;
      svg,
      img {
        margin-left: 5px;
      }
    }

    .engine-data {
      justify-content: flex-end;
      div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-right: 10px;
      }
    }
  }

  .right-container {
    .front-tyre,
    .rear-tyre {
      svg,
      img {
        margin-right: 5px;
      }
    }
    .gearbox {
      div {
        margin-left: 10px;
      }
    }
  }
`;
