"use client";
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .login-detail {
    min-width: 400px;
    height: 100vh;
    background-color: white;

    button {
      max-width: 320px;
      display: flex;
      padding: 0.5rem 1.4rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 700;
      text-align: center;
      text-transform: uppercase;
      vertical-align: middle;
      align-items: center;
      border-radius: 0.5rem;
      border: 1px solid rgba(0, 0, 0, 0.25);
      gap: 0.75rem;
      color: rgb(65, 63, 63);
      background-color: #fff;
      cursor: pointer;
      transition: all 0.6s ease;
    }

    .button svg {
      height: 24px;
    }
  }
  .bg-img {
    width: 500%;
    height: 100vh;
    background-color: black;
  }
`;
