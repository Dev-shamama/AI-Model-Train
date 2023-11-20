import { ChatShowPrompt } from "@/app/component/clientComponent";
import React from "react";
const Dashboard = () => {
  
  return (
    <>
      <div className="dashboard-start">
        <h1>Welcome Dashboard!</h1>
      </div>

      {/* Prompt Field */}
      <ChatShowPrompt />
    </>
  );
};

export default Dashboard;
