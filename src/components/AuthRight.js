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
      <div className='auth-right-down'>
        <p className='lIs'>Lorem ipsum slonabb hfjiuiojjwjlnl awujek</p>
        <p className='lis2'>Sign in to your accounts for all event planning</p>
        <button className='nBnT'>Next</button>
        <div className="dots-row">
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      </div>
    </div>
  )
}
