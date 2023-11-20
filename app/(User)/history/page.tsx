import { MaintainHistory } from "@/app/component/clientComponent";
import { HistoryContainer } from "@/app/styleComponent/Dashboard.styled";
import React from "react";

const History = () => {
  return (
    <>
      <div className="dashboard-start">
        <h1>Search History</h1>
      </div>

      <HistoryContainer>
        <MaintainHistory />
      </HistoryContainer>
    </>
  );
};

export default History;
