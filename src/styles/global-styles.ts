import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const fontsCss = css`
  @font-face {
    font-family: Noto Sans KR;
    src: url("../../public/fonts/NotoSansKR-Regular.otf") format("opentype");
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url("../../public/fonts/Roboto-Regular.ttf") format("truetype");
    font-style: normal;
    font-weight: normal;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  
  @font-face {
    font-family: Noto Sans KR;
    src: url('../../public/fonts/NotoSansKR-Regular.otf') format('opentype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: Roboto;
    src: url('../../public/fonts/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  * {
    font-weight: 700 !important;
  }

  html,
  body {
    height: 100vh;
    width: 100%;
    line-height: 1.5;
    overflow: hidden;
  }

  body {
    font-family: Noto Sans KR, sans-serif;
    background-color: ${(p) => p.theme.background};
  }

  body.fontLoaded {
    font-family: Noto Sans KR, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  button, a{
    all: unset;
    cursor: pointer;
  }
`;
