import React, { useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/auth.css'
import { AuthRight } from '../components/AuthRight';
import gg from "../images/gg.png"
import fb from "../images/fb.png"
import ap from "../images/ap.png"
import { Link } from 'react-router-dom';
import ReactSwitch from "react-switch"

export const Login = () => {
  const [rem, setRemeber] = useState(false)
  const  toggle = () => {
    setRemeber(!rem)
  }
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
                <div className='reFog'>
                  <div className='reFog-left'>
                  <ReactSwitch
                    onColor="#663999"
                    onHandleColor="#F8F8F8"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    onChange={toggle}
                    checked={rem === true}
                  />
                  
                  <p className='reM'>Remember Me</p> 

                  </div>
                  <p><Link to={'/reset-password'} className='fpas'>Forgot Password?</Link></p>
                  </div>
                <div className='loginLeftDown'>
                  <button className='loginBtn'>LOG IN <i class="fa fa-arrow-right fff"></i></button>
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
