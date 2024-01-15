import React from 'react'
import logo from '../images/logo.png'
import authlog from '../images/authlog.png'
import '../styles/auth.css'


export const AuthRight = () => {
  return (
    <div>
      <div className='auth-logo-wrapper'>
        <img src={logo} alt="logo"/>
      </div>
      <div className='auth-sec-two'>
        <img src={authlog} alt="logo"/>
      </div>
      <div className='auth-right-down'></div>
    </div>
  )
}
