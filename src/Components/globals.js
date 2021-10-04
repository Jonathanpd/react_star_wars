import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  svg path {
    fill: ${({ theme }) => theme.color_arrow_nav};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
  }
`;