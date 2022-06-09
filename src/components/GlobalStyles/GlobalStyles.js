import { createGlobalStyle } from "styled-components";
import InterBold from "./../../assets/fonts/Inter-Bold.ttf";
import InterMedium from "./../../assets/fonts/Inter-Medium.ttf";
import InterRegular from "./../../assets/fonts/Inter-Regular.ttf";

import "normalize.css";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Inter';
        src: url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    html,body {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-family: 'Inter',sans-serif;
        font-weight: 400;
    }

    * {
        box-sizing: border-box;
    }

    #root {
        width: 100%;
        height: 100%;
    }

`;

export default GlobalStyles;
