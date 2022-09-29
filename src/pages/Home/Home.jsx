import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../../components/Subscribe'
import festoPartyApp from '../../images/Festo-party-app.png'
import festoAppOnMobile from '../../images/festo-app-on-mobile.png'
import redShadow from '../../images/red_shadow.png'
import festoPartyAppMobiles2 from '../../images/Festo-party-app-mobiles2.png'
import publicSvg from '../../images/public.svg'
import lock from '../../images/lock.svg'
import lock1 from '../../images/lock1.svg'
import lock2 from '../../images/lock2.svg'
import lock3 from '../../images/lock3.svg'
import festoPartyAppMibile from '../../images/Festo-party-app-mibile.png'
import festoPartyApp3 from '../../images/Festo-party-app3.png'
import FestoPartyAppChat from '../../images/Festo-party-app-chat.png'
import logo198x78 from '../../images/festo-app-logo-198x78.png'
import photo1 from '../../images/photo1.png'
import photo2 from '../../images/photo2.png'
import photo3 from '../../images/photo3.png'

export const Home = () => {
  return (
    <div className='home'>
      <Header />
      <section className='home__banner'>
        <div className='home__banner-center'>
          <span className='home__span1'>
            Look at the map and discover house parties!
          </span>
          <span className='home__span2'>
            Host a party yourself and make money on party tickets!
          </span>
          <div className='home__span-reg'>
            <span className='home__span3'>
              Register your 
            </span>
            <span className='home__span4'>
              INTEREST
            </span>
            <span className='home__span5'>
              now!
            </span>
          </div>
          <span className='home__mobiles'>
            <img 
              src={festoPartyApp}
              alt="Festo-party-app"
              className='home__mobile1'
            />
            <img 
              src={festoAppOnMobile}
              alt="festo-app-on-mobile"
              className='home__mobile2' 
            />
          </span>
        </div>
        <img 
          src={redShadow}
          alt="red_shadow"
          className='home__red_shadow'
        />
      </section>

      <section className='home__redSection'>
        <span className='home__redSection-span1'>
          What is Festo?
        </span>
        <span className='home__redSection-span2'>
          Meet Festo the all-in-one solution <br/> for efficient party planning
        </span>
        <span className='home__redSection-span3'>
          Register your interest today and learn about next steps to set-up your party
        </span>
      </section>

      <div className='home__gray'></div>

      <Subscribe />

      <div className='home__gray'></div>

      <section className='festo-easy'>
        <img 
          src={festoPartyAppMobiles2}
          alt="Festo-party-app-mobiles2" 
          className='festo-easy__mobiles'
        />
        <div className='festo-easy__red'></div>
        <div className='festo-easy__info'>
          <h3 className='festo-easy__info--h2'>Festo Easy setup</h3>
          <h3 className='festo-easy__info--h3'>No hassle setup just follow the steps.</h3>
          <p className='festo-easy__info--p'>Festo app allows their users a hassle-free setup that only requires key information like phone number , date of birth and password to proceed.</p>          
          <HashLink className='festo-easy__info--sub' to="#subscribe" >
            <div className='festo-easy__info--subdiv'>
              + Subscribe to our newsletter
            </div>
          </HashLink>
        </div>
      </section>
      
      <div className='home__gray'></div>

      <section className='plan-parties'>
        <div className='plan-parties__info'>
          <h3 className='plan-parties__info--h2'>Plan Public/Private Parties</h3>
          <h3 className='plan-parties__info--h3'>Chose whether to have your parties for public or keep them private.</h3>
          <div className='plan-parties__info--p'>
            <img src={publicSvg} alt="public" className='plan-parties__info--p-p1' />
            <p className='plan-parties__info--p-p2'>Public Parties</p>
            <img src={lock} alt="lock" className='plan-parties__info--p-p3' />
            <p className='plan-parties__info--p-p4'>Private Parties</p>
          </div>
          <Link className='plan-parties__info--sub' to="/features" >
            <div className='plan-parties__info--subdiv'>
              + View Features
            </div>
          </Link>
        </div>
        <div className='plan-parties__red'></div>
        <img 
          src={festoPartyAppMibile}
          alt="Festo-party-app-mobiles" 
          className='plan-parties__mobile'
        />
      </section>

      <div className='home__gray'></div>

      <section className='festo-easy'>
        <img 
          src={festoPartyApp3}
          alt="Festo-party-app3" 
          className='sell-tickets__mobiles1'
        />
        <img 
          src={FestoPartyAppChat}
          alt="Festo-party-app-chat" 
          className='sell-tickets__mobiles2'
        />
        <div className='festo-easy__red'></div>
        <div className='festo-easy__info'>
          <h3 className='festo-easy__info--h2'>Sell tickets to parties & chat with people</h3>
          <h3 className='festo-easy__info--h3'>Create and get paid for parties directly from the app.</h3>
          <div className='plan-parties__info--p'>
            <img src={lock1} alt="lock1" className='plan-parties__info--p-p1' />
            <p className='sell-tickets__info--p-p2'>Add bank</p>
            <img src={lock} alt="lock" className='plan-parties__info--p-p3' />
            <p className='plan-parties__info--p-p4'>Secure payments</p>
          </div>
          <div className='plan-parties__info--p2'>
            <img src={lock2} alt="lock2" className='plan-parties__info--p-p1' />
            <p className='sell-tickets__info--p-p2-1'>Chat with people</p>
            <img src={lock3} alt="lock3" className='plan-parties__info--p-p3' />
            <p className='plan-parties__info--p-p4'>Block people</p>
          </div>
          <HashLink className='festo-easy__info--sub' to="/contact-us" >
            <div className='festo-easy__info--subdiv'>
              + Register your interest
            </div>
          </HashLink>
        </div>
      </section>
      
      <section className='reviews'>
        <div className="reviews__slider">
          <div className="reviews__slider--textbox">
            <img 
              src={logo198x78}
              alt="logo"
              className="reviews__slider--textbox-logo"
            />
            <span className="reviews__slider--textbox-text">
              Why people love it?
            </span>
          </div>
          <div className="reviews__slider--sliderbox"></div>
        </div>
        <div className="reviews__photos">
          <img src={photo1} alt="photo1" className='reviews__photos--photo'/>
          <img src={photo2} alt="photo2" className='reviews__photos--photo'/>
          <img src={photo3} alt="photo3" className='reviews__photos--photo'/>
        </div>
      </section>

      <Subscribe id='subscribe' />
      <Footer />
    </div>
  )
}
