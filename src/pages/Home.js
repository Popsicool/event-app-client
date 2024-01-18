import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../images/logo.png'

export const Home = () => {
  return (
    <>
     <HelmetProvider>
        <Helmet>
          <title>Eventy</title>
        </Helmet>
      </HelmetProvider>
      <nav>
        <div class='log-wr'>
          <im src={logo} alt='logo'/>

        </div>
      </nav>
    </>
  )
}
