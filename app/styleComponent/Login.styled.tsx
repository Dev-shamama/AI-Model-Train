"use client";
import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &.sign-direction {
    flex-direction: row-reverse;
  }

  .login-detail {
    min-width: 350px;
    height: 100vh;
    padding: 40px;

    h1 {
      margin-bottom: 30px;
    }
    h2 {
      color: ${(props) => props.theme.favColor};
      font-size: 28px;
      margin-bottom: 10px;
    }
    p {
      font-weight: bold;
      a {
        color: steelblue;
      }
    }

    .login-form {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      /* background-color: red; */
      input {
        width: 100%;
        margin: 10px 0;
        padding: 10px;
        outline: none;
        border: 1px solid gray;
        border-radius: 6px;
      }

      .form-button {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: start;
      }

      button {
        /* display: inline-block; */
        overflow: hidden;
        padding: 8px 16px;
        z-index: 1;
        color: white;
        border: 1px solid ${(props) => props.theme.favColor};
        border-radius: 6px;
        position: relative;
        background: ${(props) => props.theme.favColor};

        &::before {
          position: absolute;
          content: "";
          background: white;
          width: 150px;
          height: 200px;
          z-index: -1;
          border-radius: 50%;
        }

        &:hover {
          color: ${(props) => props.theme.favColor};
        }

        &:before {
          top: 100%;
          left: 100%;
          transition: 0.3s all;
        }

        &:hover::before {
          top: -30px;
          left: -30px;
        }
      }
    }

    .loginProvider {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-top: 20px;
      .login-provider-button {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        padding: 0.5rem 1.4rem;
        font-size: 0.875rem;
        font-weight: 700;
        text-align: center;
        align-items: center;
        border-radius: 0.5rem;
        border: 1px solid rgba(0, 0, 0, 0.25);
        gap: 0.75rem;
        color: rgb(65, 63, 63);
        background-color: #fff;
        cursor: pointer;
        transition: all 0.6s ease;

        &:hover {
          color: ${(props) => props.theme.favColor};
        border: 1px solid ${(props) => props.theme.favColor};
          
        }
      }


    }
  }
  .bg-img {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
  }
  .bg-img::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  background: linear-gradient(90deg, #020024cf 0%, #090979b5 35%, #00d5ff9a 100%);
  }
`;
