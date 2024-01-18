import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/auth.css'
import { AuthRight } from '../components/AuthRight';
import gg from "../images/gg.png"
import fb from "../images/fb.png"
import ap from "../images/ap.png"
import { Link } from 'react-router-dom';

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
            <div className='login-left'>
              <h2 className='wel-back'>Welcome back</h2>
              <p className='lyA'>Login to your account</p>
              <p className='invalidU'>Invalid username or password </p>
              <form>
                <input className='loginInput' placeholder='Email'/> <br/>
                <input className='loginInput' placeholder='Password'/> <br/>
                <p className='reFog'><span>Remember Me</span> <Link to={'/reset-password'}>Forgot Password?</Link></p>
                <div className='loginLeftDown'>
                  <button className='loginBtn'>LOG IN <span className='lArroew'>&rarr;</span></button>
                  <p className="dhac">Don't have an account? <Link to={'/signup'}><span  className='sUp'>Sign Up</span></Link></p>
                  <p>OR</p>
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
              </form>

            </div>
          </div>
          <div className='auth-right'>
            <AuthRight/>
          </div>

        </div>
    </>
  )
}
