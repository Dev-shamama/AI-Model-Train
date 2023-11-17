import { Button, Nav } from "@/app/styleComponent/Header.style";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Nav>
      <div className="headerContent">
        <div className="logo">
          <Link href="/"><h1>AI IntelliGence</h1></Link>
        </div>

        <div className="menu">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="#">
            <li>Service</li>
          </Link>
          <Link href="#">
            <li>About</li>
          </Link>
          <Link href="#">
            <li>Contact</li>
          </Link>
        </div>
      </div>

      <div className="registerAccountButton">
        <Button>
          <Link href="/login">
            <span>Login</span>
            <span></span>
          </Link>
        </Button>
        <Button>
          <Link href="/signup">
            <span>Sign Up</span>
            <span></span>
          </Link>
        </Button>
      </div>
    </Nav>
  );
};

export default Navbar;
