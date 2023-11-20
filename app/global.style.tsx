"use client"
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
  .fav-color {
  color: #0077ff;
}

.start-chating {
  margin-top: 20px;
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    border: 1px solid #f4eee0;
    align-items: center;
    flex-direction: column;
    span {
      font-size: 80px;
    }
  }
}
`;
