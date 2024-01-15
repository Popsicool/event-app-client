import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/auth.css'
import { AuthRight } from '../components/AuthRight';
import gg from "../images/gg.png"
import fb from "../images/fb.png"
import ap from "../images/ap.png"

export const Login = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
            <title>Login | Eventy</title>
            </Helmet>
        </HelmetProvider>



        <div className='auth-main'>
          <div className='auth-left'>
            <h2>Welcome back</h2>
            <p>Login to your account</p>
            <form>
              <input placeholder='Email'/> <br/>
              <input placeholder='Password'/> <br/>
              <p><span>Remember Me</span> <a href='https://www.me.com'>Forgot Password?</a></p>
              <button>LOG IN</button>
            </form>
            <p>Don't have an account? <a href='https://www.me.com'>Sign Up</a></p>
            <div className='icon-list'>
              <div className='icon-wrap'>
                <img src={gg} alt="google"/>
              </div>
              <div className='icon-wrap'>
                <img src={fb} alt='facebook'/>
              </div>
              <div className='icon-wrap'>
                <img src={ap} alt="apple"/>
              </div>

            </div>

          </div>
          <div className='auth-right'>
            <AuthRight/>
          </div>

        </div>
    </>
  )
}
