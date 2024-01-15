import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

export const Home = () => {
  return (
    <>
     <HelmetProvider>
        <Helmet>
          <title>Eventy</title>
        </Helmet>
      </HelmetProvider>
      <div>Home  alone</div>
    </>
  )
}
