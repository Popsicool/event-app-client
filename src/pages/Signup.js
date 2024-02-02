import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/auth.css'
import { AuthRight } from '../components/AuthRight';
import gg from "../images/gg.png"
import fb from "../images/fb.png"
import ap from "../images/ap.png"
import { Link } from 'react-router-dom';


export const Signup = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
            <title>Signup | Eventy</title>
            </Helmet>
        </HelmetProvider>
        <div className='auth-main'>
          <div className='auth-left'>
            <div className='login-left'>
              <h2 className='wel-back'>Sign up to get started</h2>
              <form>
                <input className='loginInput' placeholder='Full Name'/> <br/>
                <input className='loginInput' placeholder='Email'/> <br/>
                <input className='loginInput' placeholder='Password'/> <br/>
                <input className='loginInput' placeholder='Confirm password'/> <br/>
                <div className='loginLeftDown'>
                  <button className='loginBtn'>SIGN UP<span className='lArroew'>&rarr;</span></button>
                  <p className="dhac">Already have an account? <Link to={'/login'}><span  className='sUp'>Sign In</span></Link></p>
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
