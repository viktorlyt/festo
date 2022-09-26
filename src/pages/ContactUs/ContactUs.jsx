import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../Home/Subscribe'

export const ContactUs = () => {
  return (
    <div className='ContactUs'>
      <Header />
      <div className='home__banner' style={{ backgroundImage: "url(/contact-us_banner.png)" }}>
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
      </div>

      <div className='home__redSection'>
        <span className='home__redSection-span1'>
          What is Festo?
        </span>
        <span className='home__redSection-span2'>
          Meet Festo the all-in-one solution <br/> for efficient party planning
        </span>
        <span className='home__redSection-span3'>
          Register your interest today and learn about next steps to set-up your party
        </span>
      </div>

      <div className='home__gray'></div>

      <Subscribe />

      <div className='home__gray'></div>

      <Subscribe />
      <Footer />
    </div>

    
  )
}
