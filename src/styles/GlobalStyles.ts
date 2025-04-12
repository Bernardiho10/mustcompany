import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Pretendard:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap');

  :root {
    --color-primary: #111111;
    --color-secondary: #4C4C4C;
    --color-accent: #8C5947;
    --color-bg: #FFFFFF;
    --color-bg-secondary: #F8F4F3;
    --color-bg-dark: #222222;
    --color-gray: #BBBBBB;
    --color-gray-light: #DDDCDC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    color: var(--color-primary);
    background-color: var(--color-bg);
    line-height: 1.5;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Gowun Batang', serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 20px;
    }
  }
`;

export default GlobalStyles; 