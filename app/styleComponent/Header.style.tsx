"use client";
import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
`;

export const Nav = styled.nav`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #141414;
  .headerContent {
    display: flex;
    flex-direction: row;
    align-items: center;
    .logo {
      margin: 0 20px;
      color: white;
    }
    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 20px;
      a {
        text-decoration: none;
      }
      a li {
        list-style: none;
      }
    }
  }

  .registerAccountButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    margin-right: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 4em 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubWrapper = styled.div`
  max-width: 1000px;
`;

export const HeroSectionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  .detail {
    h1 {
      font-size: 50px;
    }
    p {
      line-height: 1.4em;
      margin: 18px 0px;
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  overflow: hidden;
  padding: 8px 16px;
  z-index: 1;
  color: ${(props) => props.theme.favColor};
  border: 1px solid ${(props) => props.theme.favColor};
  border-radius: 6px;
  position: relative;
  background: none;

  &::before {
    position: absolute;
    content: "";
    background: ${(props) => props.theme.favColor};
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
  }

  &:hover {
    color: white;
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
`;

export const SectionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    text-align: center;
    font-size: 35px;
    margin-bottom: 20px;
  }
  p {
    max-width: 650px;
    line-height: 1.7em;
    text-align: center;
  }
`;

export const ServiceCard = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 40px 0;
  gap: 25px;
  .card {
    width: 300px;
    padding: 15px;
    box-shadow: rgba(149, 157, 165, 0.3) 0px 12px 48px 0px;
    border-radius: 8px;
    .card-header {
      display: flex;
      justify-content: start;
      align-items: center;
      flex-direction: row;
      .icon {
        width: 70px;
        height: 70px;
        overflow: hidden;
        margin-right: 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .detail p {
      font-size: 15px;
      padding: 10px 0;
      line-height: 1.5em;
    }
  }
  .card.card-down {
    transform: translateY(30%);
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4em 0 0 0;
  background-color: #282C2F;
  .footer-container {
    width: 1000px;
    margin: 4em 0 4em 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: red; */
    flex-direction: row;

    .footer-address {
      display: flex;
      justify-content: space-between;
      align-items: start;
      flex-direction: column;
      gap: 10px;
      .item {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: white;
          margin: 15px;
          border-radius: 50%;
          background-color: #33383B;
          width: 50px;
          height: 50px;
        }
        .text {
          p {
            color: #FCFAF9;
            margin-bottom: 5px;
          }
          h3 {
            color: #FCFAF9;
          }
        }
      }
    }

    .footer-about {
      h2 {
        color: #FCFAF9;
      }
      p {
        margin: 20px 0;
        width: 300px;
        color: #919295;
        line-height: 1.5em;
      }
      .social-icon-list {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        .social-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          color: white;
          margin: 10px;
          margin-left: 0;
          border-radius: 4px;
          background-color: #33383B;
          width: 50px;
          height: 50px;
        }
      }
    }
  }
`;
