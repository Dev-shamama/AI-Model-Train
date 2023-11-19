import React, { ReactNode } from "react";
import { DashboardContainer } from "../styleComponent/Dashboard.styled";
import Link from "next/link";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <DashboardContainer>
      <div id="sidebar">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/history">History</Link>
        <Link href="/setting">Setting</Link>
      </div>

      <div id="content">{children}</div>
    </DashboardContainer>
  );
};

export default layout;
