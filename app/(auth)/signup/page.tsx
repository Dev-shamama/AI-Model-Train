import { LoginContainer } from '@/app/styleComponent/Login.styled'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LoginImage from "../../assets/img/signup2.jpg";
import { SignUpForm } from '@/app/component/clientComponent';

const SignUp = () => {
  return (
    <LoginContainer className='sign-direction'>
    <div className="login-detail">
      <h1>AI IntelliGence</h1>
      <h2>Create Account</h2>
      <p>Your have already Account? <Link href="/login">Login</Link></p>

      <SignUpForm />
      
    </div>

    <div className="bg-img">
      <Image src={LoginImage} alt="asd" />
    </div>
  </LoginContainer>
    
  )
}

export default SignUp