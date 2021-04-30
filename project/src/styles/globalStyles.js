import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-size:14px;
        background-color:transparent;
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
    input, button {
        background-color: transparent;
    }
    h1 {
      display: block;
      float: left;
      padding:27px;
      font-family:'Maven Pro', sans-serif;
      font-size:20px;
      font-weight: bold;
    }
    h2, h3, h4, h5, h6 {
    font-family:'Maven Pro', sans-serif;
  }

    select::-ms-expand {
      display: none
    }


`;

export default GlobalStyles;