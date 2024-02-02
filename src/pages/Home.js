import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import logo from '../images/logo.png'
import herr from '../images/herr.png'
// import down from '../images/down.png'
import sanc1 from '../images/sancho1.png'
import star from '../images/star.png'
import ins from '../images/in.png'
import fb from '../images/fb.png'
import ln from '../images/ln.png'
import tw from '../images/tw.png'
import sanc2 from '../images/sancho2.png'
import "../styles/landing.css"
import { Link } from 'react-router-dom';
import create from '../images/create.png'
import { LogoSlider } from '../components/LogoSlider';
import { TestinonySlider } from '../components/TestinonySlider';

export const Home = () => {
  return (
    <>
     <HelmetProvider>
        <Helmet>
          <title>Eventy</title>
        </Helmet>
      </HelmetProvider>
      <nav className='landing-nav'>
        <div className='lan-nav-left'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='lan-nav-mid'>
          <p><Link to="/">Home</Link></p>
          <div>
            <a href="/">
            <p>Feauture</p>
            {/* <img src={down} alt="down-arrow"/> */}
            </a>
          </div>
            <p>
                About
            </p>
        </div>
        <div className='lan-nav-right'>
          <Link to={'/signup'}><button className='lan-sign'>Sign In <span className='aM'>  &rarr;</span></button></Link>
        </div>
      </nav>
      <div className='land-hero'>
        <p className='tUlti'>The ultimate Backup and Restore tool for teams and <span className='tUlti2'>individual</span></p>
        <p className='tUltim'>You can now Backup your important files and save them from unplanned loss.<br/>Also restore the files when you are ready.</p>
        <div className='land-sec-two mob'>
          <img src={herr} alt="hero"/>
        </div>
        <div>
          <button className='waitlistBtn'>Join the waitlist  &rarr;</button>
        </div>
        <div className='stars-row'>
          <div className='star-wrap'>
            <img src={star} alt='star'/>
          </div>
          <div className='star-wrap'>
            <img src={star} alt='star'/>
          </div>
        </div>

      </div>
      <div className='land-sec-two reveal desk'>
        <img src={herr} alt="hero"/>
      </div>
      <div className='land-sec-three'>
        <p className='trustB'>Trusted by Top rated companies</p>
        <p className='useEv'>Use EventApp and join the top 1%</p>
        <LogoSlider/>
      </div>
      <div className='land-sec-four reveal'>
        <p className='ftur'>Features</p>
        <p className='dmeasy'>Donations and Support for event made seamless</p>
        <p className='gsad'>Get support and donations from friends and family towards the success of your event in a seamless manner</p>
        <div className='dividedTwo'>
          <div className='dividedtwoLeft'>
            <div className='divimgwrap'>
              <img src={create} alt="create"/>
            </div>
            <p className='asake'>Organization</p>
            <p className='ololade'>Organize your event planning in the most efficient manner.</p>

          </div>
          <div className='dividedtwoRight'>
          <div className='divimgwrap'>
              <img src={create} alt="create"/>
            </div>
            <p className='asake'>Invite Guests Far and Wide</p>
            <p className='ololade'>Easily send invites to prospective guests and friends through various social media platforms.</p>
          </div>

        </div>

      </div>
      <TestinonySlider/>
      <div className='land-sec-six'>
        <div className='land-sec-six-inner1'>
          <div className='land-sec-six-inner'>
            <div className='sancho-wrap'>
              <img src={sanc1} alt="sanch"/>
            </div>
            <div className='sancho-mid'>
              <p className='spye'>Start planning your events efficiently with EventApp</p>
              <p className='ebe'>Join the waitlist and get access to the beta version of EventApp today</p>
              <Link to="/signup">
                <button className='sancho-btn'>Get started  &rarr;</button>
              </Link>
            </div>
            <div className='sancho-wrap'>
              <img src={sanc2} alt="sanch"/>
            </div>

          </div>
        </div>
      </div>
      <footer>
        <div className='footer-land'>
          <div className='footer-left'>
            <div className='footer-left-top'>
              <div className='footer-logo'>
                <img src={logo} alt='logo'/>
              </div>
              <p className='footer-eve'>EventApp</p>
              <p className='footer-your desk'>
                  Your go-to help when you need to plan your event in a hassle free way, and get the best result.
              </p>
            </div>
            <div className='footer-left-bottom'>
              <div  className='f-l-l'>
                <p className='foo-pro'>Product</p>
                <p className='foo-fea'>Features</p>
                <p className='foo-fea'>Documentations</p>
                <p className='foo-fea'>Pricing</p>
              </div>
              <div  className='f-l-m'>
                <p className='foo-pro'>Company</p>
                <p className='foo-fea'>FAQs</p>
                <p className='foo-fea'>Documentations</p>
                <p className='foo-fea'>Blog</p>
                <p className='foo-fea'>Terms of service</p>

              </div>
              <div  className='f-l-r'>
                <p className='foo-pro'>Integration</p>
                <p className='foo-fea'>Features</p>
                <p className='foo-fea'>Documentations</p>
                <p className='foo-fea'>Pricing</p>

              </div>

            </div>

          </div>
          <div className='footer-right'>
            <p className='supdated'>Stay updated with</p>
            <p className='eventNews'>EventApp by signing up for our newsletter</p>
            <form className='sub-form'>
              <input type='email' className='subinp' placeholder='Email address'/>
              <div className='sub-btn-wrap'>
                <button className='sub-btn'>Subscribe</button>
              </div>
            </form>
            <p className='connect'>Connect with us</p>
            <div className='soci-row'>
            <Link to="/">
                <div className='soci-row-img-wrap'>
                  <img src={ln} alt="linkedin"/>
                </div>
              </Link>
              <Link to="/">
                <div className='soci-row-img-wrap'>
                  <img src={ins} alt="inst"/>
                </div>
              </Link>
              <Link to="/">
                <div className='soci-row-img-wrap'>
                  <img src={fb} alt="facebook"/>
                </div>
              </Link>
              <Link to="/">
                <div className='soci-row-img-wrap'>
                  <img src={tw} alt="twitter"/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
