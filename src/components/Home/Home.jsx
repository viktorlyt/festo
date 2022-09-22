import React from 'react'
import { Header } from '../Header'

export const Home = () => {
  return (
    <div>
      <Header />
      <div className='home__banner' style={{ backgroundImage: "url(/home_banner.png)" }}>
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
    </div>
  )
}
