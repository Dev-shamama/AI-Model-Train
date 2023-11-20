"use client";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  #sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #212121;
    padding-top: 20px;
    color: #fff;
  }

  #sidebar a {
    padding: 15px;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    display: block;
    transition: 0.3s;
  }

  #sidebar a:hover {
    background-color: #555;
  }

  #content {
    width: calc(100% - 250px);
    min-height: 100vh;
    margin-left: 250px;
    padding: 20px;
    background-color: #424242;
    position: relative;
    color: #f4eee0;

    .dashboard-start {
      padding: 20px 0 0 20px;
      margin-bottom: 20px;
    }

    .data-request {
      margin: 10px 0 80px 0;
      padding: 20px;

      .response-loading {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
      }
    }

    .question {
      /* margin: 15px 0; */
      margin-top: 20px;
      padding: 15px;
      background-color: #212121;
      border-radius: 6px 6px 0 0;
    }
    .ai-replay {
      padding: 15px;
      background-color: #616161;
      border-radius: 0 0 6px 6px;
    }
  }

  .prompt-bar {
    width: calc(100% - 250px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background-color: #424242;
    position: fixed;
    bottom: 0;

    .prompt-container {
      background-color: #424242;
      min-width: 500px;
      padding: 5px 20px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      box-shadow: 0 11px 15px -7px rgb(0 0 0 / 20%),
        0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%);

      input {
        width: 100%;
        height: 100%;
        padding: 10px 0;
        border-radius: 8px;
        background: none;
        border: none;
        outline: none;
        color: gray;
      }
      button {
        cursor: pointer;
        height: 100%;
        padding: 10px;
        background: none;
        border: none;
        color: gray;
      }
    }
  }
`;

export const ProfileSetting = styled.div`
  width: 100%;
  height: 300px;

  .top-part {
    width: 100%;
    height: 300px;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 20px;

    .profile-img {
      width: 400px;
      height: 100%;
      background-color: #212121;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      .img {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      h3 {
        margin-top: 15px;
      }
    }

    .profile-detail {
      width: 100%;
      height: 100%;
      background-color: #212121;
      border-radius: 8px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      padding: 20px;
      table {
        border-collapse: collapse;
        width: 100%;

        tbody {
          tr {
            border-bottom: 1px solid #424242;
            th {
              padding: 15px;
              text-align: left;
            }
            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
`;

export const HistoryContainer = styled.div`
  padding: 20px;

  .historyTime {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    padding: 10px;
    border-radius: 8px;
    overflow: hidden;
    thead {
      background-color: #212121;
      border-radius: 20px;
      tr {
        th {
          padding: 10px 10px 10px 10px;
          text-align: left;
        }
      }
    }
    tbody {
      background-color: #373737;

      tr {
        border-bottom: 1px solid #424242;

        td {
          padding: 10px 10px 10px 10px;
          &:first-child {
            min-width: 120px;
          }
          &:nth-child(2) {
            width: 100%;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`;
