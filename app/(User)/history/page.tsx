import { HistoryContainer } from "@/app/styleComponent/Dashboard.styled";
import React from "react";

const History = () => {
  return (
    <>
      <div className="dashboard-start">
        <h1>Search History</h1>
      </div>

      <HistoryContainer>
        <div className="historyTime">
          <h3>Today</h3>
        </div>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Prompt</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#193123</td>
              <td>How are you GPT?</td>
              <td>View</td>
            </tr>
            <tr>
              <td>#193123</td>
              <td>How are you GPT?</td>
              <td>View</td>
            </tr>
            <tr>
              <td>#193123</td>
              <td>Lorem ipsum dolor,  quam hic.</td>
              <td>View</td>
            </tr>
          </tbody>
        </table>

      </HistoryContainer>
    </>
  );
};

export default History;
