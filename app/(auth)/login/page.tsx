// import Navbar from '@/app/component/Navbar/Navbar'
import { LoginContainer } from "@/app/styleComponent/Login.styled";
import Link from "next/link";
import React from "react";
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io5";
import LoginImage from "../../assets/img/login.jpg";
import Image from "next/image";
import { LoginForm } from "@/app/component/clientComponent";


const Login = () => {
  
  return (
    // <Navbar/>
    <>
      <LoginContainer>
        <div className="login-detail">
          <h1>AI IntelliGence</h1>
          <h2>Login in to your account</h2>
          <p>Your have no account? <Link href="/signup">Sign Up</Link></p>

          <LoginForm />
          
        </div>

        <div className="bg-img">
          <Image src={LoginImage} alt="asd" />
        </div>
      </LoginContainer>
    </>
  );
};

export default Login;
