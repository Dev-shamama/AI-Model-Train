"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const ThemeSender = ({ children }: { children: ReactNode }) => {
  const theme = {
    favColor: "#0077ff",
  };
  return (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default ThemeSender;
