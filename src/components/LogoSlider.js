import React from 'react'
import hof from '../images/hofaaw.png'
import fog from '../images/fog_logo.jpg'
import gifard from '../images/gifard.jpg'
import '../styles/logoslide.css'

export const LogoSlider = () => {
  return (
    <div className="logo-slider">
        <div className="logo-container">
            <div className='log-log'>
                <img src={hof} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={fog} alt="Logo 2" />
            </div>
            <div className='log-log'>
                <img src={gifard} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={fog} alt="Logo 2" />
            </div>
            <div className='log-log'>
                <img src={hof} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={gifard} alt="Logo 2" />
            </div>
        {/* Add more logos as needed */}
        </div>
        <div className="logo-container">
            <div className='log-log'>
                <img src={hof} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={fog} alt="Logo 2" />
            </div>
            <div className='log-log'>
                <img src={gifard} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={fog} alt="Logo 2" />
            </div>
            <div className='log-log'>
                <img src={hof} alt="Logo 1" />
            </div>
            <div className='log-log'>
                <img src={gifard} alt="Logo 2" />
            </div>
        {/* Add more logos as needed */}
        </div>
  </div>
  )
}
