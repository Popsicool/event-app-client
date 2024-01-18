import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../styles/auth.css'
import { AuthRight } from '../components/AuthRight';

export const Verification = () => {
  return (
    <>
        <HelmetProvider>
            <Helmet>
                <title>Verify | Eventy</title>
            </Helmet>
        </HelmetProvider>
        <div className='auth-main'>
            <div className='auth-left'>
                <div className='login-left'>
                    <h2 className='wel-back'>Verification</h2>
                    <p className='lyA'>We've send you a verification code to your email address</p>
                    <p className='invalidU'>Incorrect verification code</p>
                    <div className='loginLeftDown'>
                    <form>
                        <div className='verifInpWrap'>
                            <input type="number" className='verifInp'/>
                            <input type="number" className='verifInp'/>
                            <input type="number" className='verifInp'/>
                            <input type="number" className='verifInp'/>
                            <input type="number" className='verifInp'/>
                            <input type="number" className='verifInp'/>
                        </div>
                    </form>
                  <button className='loginBtn'>VERIFY <span className='lArroew'>&rarr;</span></button>
                  <p className="dhac">Re-send verification code in 0:60</p>
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
