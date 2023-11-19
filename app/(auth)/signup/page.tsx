import Navbar from '@/app/component/Navbar/Navbar'
import { LoginContainer } from '@/app/styleComponent/Login.styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io5'
import LoginImage from "../../assets/img/signup2.jpg";

const Signup = () => {
  return (
    <LoginContainer className='sign-direction'>
    <div className="login-detail">
      <h1>AI IntelliGence</h1>

      <h2>Create Account</h2>

      <p>
        Your have already Account? <Link href="/login">Login</Link>
      </p>

      <form className="login-form">
      <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

        <div className="form-button">
          <button>Sign Up</button>
        </div>
      </form>

      <div className="loginProvider">
        <button className="login-provider-button">
          <div className="icon">
            <IoLogoGoogle />
          </div>
          <span>Google</span>
        </button>

        <button className="login-provider-button">
          <div className="icon">
            <IoLogoFacebook />
          </div>
          <span>Facebook</span>
        </button>
      </div>
    </div>

    <div className="bg-img">
      <Image src={LoginImage} alt="asd" />
    </div>
  </LoginContainer>
    
  )
}

export default Signup