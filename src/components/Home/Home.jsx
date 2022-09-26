import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { Subscribe } from './Subscribe'

export const Home = () => {
  return (
    <div className='home'>
      <Header />
      <section className='home__banner' style={{ backgroundImage: "url(/home_banner.png)" }}>
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
              src="Festo-party-app.png" 
              alt="Festo-party-app"
              className='home__mobile1'
            />
            <img 
              src="festo-app-on-mobile.png" 
              alt="festo-app-on-mobile"
              className='home__mobile2' 
            />
          </span>
        </div>
        <img 
          src="red_shadow.png" 
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
          src="Festo-party-app-mobiles2.png" 
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
            <img src="public.svg" alt="public" className='plan-parties__info--p-p1' />
            <p className='plan-parties__info--p-p2'>Public Parties</p>
            <img src="lock.svg" alt="lock" className='plan-parties__info--p-p3' />
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
          src="Festo-party-app-mibile.png" 
          alt="Festo-party-app-mobiles" 
          className='plan-parties__mobile'
        />
      </section>

      <div className='home__gray'></div>

      <section className='festo-easy'>
        <img 
          src="Festo-party-app3.png" 
          alt="Festo-party-app3" 
          className='sell-tickets__mobiles1'
        />
        <img 
          src="Festo-party-app-chat.png" 
          alt="Festo-party-app-chat" 
          className='sell-tickets__mobiles2'
        />
        <div className='festo-easy__red'></div>
        <div className='festo-easy__info'>
          <h3 className='festo-easy__info--h2'>Sell tickets to parties & chat with people</h3>
          <h3 className='festo-easy__info--h3'>Create and get paid for parties directly from the app.</h3>
          <div className='plan-parties__info--p'>
            <img src="lock1.svg" alt="lock1" className='plan-parties__info--p-p1' />
            <p className='sell-tickets__info--p-p2'>Add bank</p>
            <img src="lock.svg" alt="lock" className='plan-parties__info--p-p3' />
            <p className='plan-parties__info--p-p4'>Secure payments</p>
          </div>
          <div className='plan-parties__info--p2'>
            <img src="lock2.svg" alt="lock2" className='plan-parties__info--p-p1' />
            <p className='sell-tickets__info--p-p2-1'>Chat with people</p>
            <img src="lock3.svg" alt="lock3" className='plan-parties__info--p-p3' />
            <p className='plan-parties__info--p-p4'>Block people</p>
          </div>
          <HashLink className='festo-easy__info--sub' to="/contact-us" >
            <div className='festo-easy__info--subdiv'>
              + Register your interest
            </div>
          </HashLink>
        </div>
      </section>
      
      <div className='home__gray'></div>

      <Subscribe id='subscribe' />
      <Footer />
    </div>

    
  )
}
