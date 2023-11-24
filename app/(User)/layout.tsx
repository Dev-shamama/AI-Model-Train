import React, { ReactNode } from "react";
import { DashboardContainer } from "../styleComponent/Dashboard.styled";
import Link from "next/link";
import { LogoutBtn } from "../component/clientComponent";
import ProtectedDashboard from "./ProtectedDashboard";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <ProtectedDashboard>
      <DashboardContainer>
        <div id="sidebar">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/history">History</Link>
          <Link href="/setting">Setting</Link>
          <LogoutBtn />
        </div>

        <div id="content">{children}</div>
      </DashboardContainer>
    </ProtectedDashboard>
  );
};

export default layout;
