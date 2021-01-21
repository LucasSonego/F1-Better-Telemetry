import { createGlobalStyle } from "styled-components";

import Formula1Regular from "./Formula1-Regular.woff";
import Formula1Bold from "./Formula1-Bold.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'F1 Regular';
        src: local('F1 Regular'),
        url(${Formula1Regular}) format('woff');
    }
    @font-face {
        font-family: 'F1 Bold';
        src: local('F1 Bold'),
        url(${Formula1Bold}) format('woff');
    }
`;
