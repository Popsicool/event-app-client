import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import bg from '../images/fpas.png'
import fpass from '../images/fpass.png'
import '../styles/auth.css'

export const ResetPassword = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <title>Reset Password | Eventy</title>
            </Helmet>
        </HelmetProvider>
        <div className='auth-main'>
            <div className='auth-left'>
                <div className='login-left'>
                    <h2 className='wel-back'>Reset Password</h2>
                    <div className='fpassWrap'>
                        <img src={fpass} alt='forget-pass'/>
                    </div>
                    <p>Please enter your email address to receive a link to reset your password</p>
                    <form>
                        <input className='loginInput' placeholder='Email' type='email'/> <br/>
                        <div className='loginLeftDown'>
                            <button className='loginBtn'>SEND <span className='lArroew'>&rarr;</span></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='forget-right'>
                <img src={bg} alt='fpass'/>
            </div>

        </div>
    </>
  )
}
