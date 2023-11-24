"use client"
import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ProtectedDashboard = ({ children }: { children: ReactNode }) => {
  const { status } = useSession();
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return <div>{children}</div>;
};

export default ProtectedDashboard;
