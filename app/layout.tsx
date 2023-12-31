import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import ThemeSender from "./themeProvider";
import Favicon from "/public/ideas.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthenticationProvider } from "@/context/AuthContext";
import { GlobalStyle } from "./global.style";
import LoginProvider from "./LoginProvider";
const inter = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI APP",
  description: "Generated by shamama bin shakil",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = {
    favColor: "#0077ff",
  };

  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        <ToastContainer />
        <GlobalStyle />
        <ThemeSender>
          <AuthenticationProvider>
            <LoginProvider>{children}</LoginProvider>
          </AuthenticationProvider>
        </ThemeSender>
      </body>
    </html>
  );
}
