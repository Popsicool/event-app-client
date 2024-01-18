import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import bg from '../images/fpas.png'
import '../styles/auth.css'
export const ChangePassword = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <title>Change Password | Eventy</title>
            </Helmet>
        </HelmetProvider>
        <div className='auth-main'>
            <div className='auth-left'>
                <div className='login-left'>
                <h2 className='wel-back'>Create New Password</h2>
                  <form>
                        <input className='loginInput' placeholder='New Password' type='password'/> <br/>
                        <input className='loginInput' placeholder='Confirm New Password' type='password'/> <br/>
                        <div className='loginLeftDown'>
                            <button className='loginBtn'>CONFIRM <span className='lArroew'>&rarr;</span></button>
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
