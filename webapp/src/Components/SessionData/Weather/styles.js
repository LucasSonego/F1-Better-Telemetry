import styled from "styled-components";

export const Container = styled.div`
  .current-weather {
    display: flex;
    align-items: center;
    svg {
      height: 50px;
      width: 50px;
      margin-right: 5px;
    }
  }

  .temps {
    margin-top: 10px;
    p {
      margin: 0 0 5px 0;
    }
  }
`;
