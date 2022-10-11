import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Subscribe } from '../../components/Subscribe/Subscribe'
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
import festoPartyAppM from '../../images/mobile/Festo-party-app.png'
import festoAppOnMobileM from '../../images/mobile/festo-app-on-mobile.png'
import redShadows from '../../images/mobile/red_shadows.png'
import { Slider } from '../../components/Slider/Slider'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const Home = ({ animeFunction }) => {
  useEffect(() => {
    animeFunction();

    const tl = gsap.timeline();

    tl.to('._red_anime1', {
          opacity: 1,
          scrollTrigger: {
            trigger: '._red_anime1',
            start: 'top 90%',
            end: 'center 50%',
            // markers: true,
            scrub: true,
            toggleActions: 'restart none reverse reset',
          }
        })
        .to('._red_anime2', {
          opacity: 1,
          scrollTrigger: {
            trigger: '._red_anime2',
            start: 'top 90%',
            end: 'center 50%',
            // markers: true,
            scrub: true,
            toggleActions: 'restart none reverse reset',
          }
        })
        .to('._red_anime3', {
          opacity: 1,
          scrollTrigger: {
            trigger: '._red_anime3',
            start: 'top 90%',
            end: 'center 50%',
            // markers: true,
            scrub: true,
            toggleActions: 'restart none reverse reset',
          }
        })
        .to('._red_anime4', {
          // backgroundColor: '$colorRed',
          opacity: 1,
          scrollTrigger: {
            trigger: '._red_anime4',
            start: 'top 90%',
            end: 'center 50%',
            // markers: true,
            scrub: true,
            toggleActions: 'restart none reverse reset',
          }
        });
        
  // eslint-disable-next-line
  }, []);

  


  return (
    <div className='home'>
      <Header />
      <section className='home__banner'>
        <div className='home__banner-center'>
          <span className='home__span1'>
            Look at the map and <br/> discover house parties!
          </span>
          <span className='home__span2'>
            Host a party yourself and make money on party tickets!
          </span>
          <div className='home__span-reg _anim-items _anim-no-hide'>
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
          <div className='home__mobiles'>
            <img 
              src={festoPartyApp}
              srcSet={`${festoPartyAppM} 767w`}
              // sizes='(max-width: 767px) 100vw'
              alt="Festo-party-app"
              className='home__mobile1 _anim-items _anim-no-hide'
            />
            <img 
              src={festoAppOnMobile}
              srcSet={`${festoAppOnMobileM} 767w`}
              alt="festo-app-on-mobile"
              className='home__mobile2 _anim-items _anim-no-hide'
            />
          </div>
        </div>
      </section>

      <img 
          src={redShadow}
          srcSet={`${redShadows} 767w`}
          alt="red_shadow"
          className='home__red_shadow'
        />

      <section className='home__redSection'>
        <span className='home__redSection-span1 _anim-items _anim-no-hide'>
          What is Festo?
        </span>
        <span className='home__redSection-span2 _anim-items _anim-no-hide'>
          Meet Festo the all-in-one solution for efficient party planning
        </span>
        <span className='home__redSection-span3 _anim-items _anim-no-hide'>
          Register your interest today and learn about next steps to set-up your party
        </span>
      </section>

      <div className='home__gray'></div>

      <Subscribe />

      <div className='home__gray2'></div>
      
      <div className='home__white'></div>

      <section className='festo-easy'>
        <div className='festo-easy__red _red_anime1'></div>
        <img 
            src={festoPartyAppMobiles2}
            alt="Festo-party-app-mobiles2" 
            className='festo-easy__mobiles _anim-items _anim-no-hide'
          />
        <div className='festo-easy__info'>
          <div  className='festo-easy__infobox'>
            <h3 className='festo-easy__info--h2'>Festo Easy setup</h3>
            <h3 className='festo-easy__info--h3'>No hassle setup just follow the steps.</h3>
            <p className='festo-easy__info--p'>Festo app allows their users a hassle-free setup that only requires key information like phone number , date of birth and password to proceed.</p>
            <HashLink className='festo-easy__info--sub' to="#subscribe" >
              <div className='festo-easy__info--subdiv'>
                + Subscribe to our newsletter
              </div>
            </HashLink>
          </div>
        </div>
      </section>
      
      <div className='home__gray  home__gray2'></div>

      <div className='home__white'></div>

      <section className='plan-parties'>
        <div className='plan-parties__info'>
          <div className='plan-parties__infobox'>
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
        </div>
        <div className='plan-parties__red _red_anime2'></div>
        <img 
          src={festoPartyAppMibile}
          alt="Festo-party-app-mobiles" 
          className='plan-parties__mobile _anim-items _anim-no-hide'
        />
      </section>

      <div className='home__gray  home__gray2'></div>
      <div className='home__gray  home__gray3'></div>

      <div className='home__white'></div>

      <section className='sell-tickets'>
        <img 
          src={festoPartyApp3}
          alt="Festo-party-app3" 
          className='sell-tickets__mobiles1 _anim-items _anim-no-hide'
        />
        <img 
          src={FestoPartyAppChat}
          alt="Festo-party-app-chat" 
          className='sell-tickets__mobiles2 _anim-items _anim-no-hide'
        />
        <div className='sell-tickets__red _red_anime3'></div>
        <div className='sell-tickets__info'>
          <div className='sell-tickets__infobox'>
            <h3 className='sell-tickets__info--h2'>Sell tickets to parties & chat with people</h3>
            <h3 className='sell-tickets__info--h3'>Create and get paid for parties directly from the app.</h3>
            <div className='sell-tickets__info--p'>
              <div className='sell-tickets__info--p-box2'>
                <img src={lock1} alt="lock1" className='sell-tickets__info--p-p1' />
                <p className='sell-tickets__info--p-p2'>Add bank</p>
              </div>
              <div className='sell-tickets__info--p-box sell-tickets__info--p-box1'>
                <img src={lock} alt="lock" className='sell-tickets__info--p-p3' />
                <p className='sell-tickets__info--p-p4'>Secure payments</p>
              </div>
            </div>
            <div className='sell-tickets__info--p2'>
              <div className='sell-tickets__info--p-box'>
                <img src={lock2} alt="lock2" className='sell-tickets__info--p-p1' />
                <p className='sell-tickets__info--p-p2-1'>Chat with people</p>
              </div>
              <div className='sell-tickets__info--p-box4'>
                <img src={lock3} alt="lock3" className='sell-tickets__info--p-p3' />
                <p className='sell-tickets__info--p-p4'>Block people</p>
              </div>
            </div>
            <HashLink className='festo-easy__info--sub' to="/contact-us" >
              <div className='festo-easy__info--subdiv'>
                + Register your interest
              </div>
            </HashLink>
          </div>
        </div>
      </section>
      
      <section className='reviews'>
        <img 
          src={festoPartyApp3}
          alt="Festo-party-app3" 
          className='reviews__mobile'
        />
        <div className="reviews__slider _red_anime4">
          <div className="reviews__slider--textbox">
            <img 
              src={logo198x78}
              alt="logo"
              className="reviews__slider--textbox-logo"
            />
            <span className="reviews__slider--textbox-text">
              Why people <br/> love it?
            </span>
          </div>
          <div className="reviews__slider--sliderbox">
            <Slider />
          </div>
        </div>
        <div className="reviews__photos">
          <div className='reviews__photos--photo1'></div>
          <div className='reviews__photos--photo2'></div>
          <div className='reviews__photos--photo3'></div>
        </div>
      </section>

      <Subscribe id='subscribe' />
      <Footer />
    </div>
  )
}
