import React, { useEffect } from 'react'
import { ParallaxBanner } from './ParallaxBanner'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import f1 from '../../images/f1.svg'
import f2 from '../../images/f2.svg'
import f3 from '../../images/f3.svg'
import f4 from '../../images/f4.svg'
import f5 from '../../images/f5.svg'
import f6 from '../../images/f6.svg'
import f7 from '../../images/f7.svg'
import f8 from '../../images/f8.svg'
import f9 from '../../images/f9.svg'
import f10 from '../../images/f10.svg'
import f11 from '../../images/f11.svg'
import f12 from '../../images/f12.svg'
import f13 from '../../images/f13.png'
import CookieConsent from 'react-cookie-consent'

export const Features = ({ animeFunction }) => {
  // eslint-disable-next-line
  useEffect(() => animeFunction(), []);


  return (
    <div className='features'>
      <Header />

      <div className='features__banner'></div>
      
      <div className='features__text'>
        <h1 className='features__text--text1'>Festo App Features</h1>
        <span className='features__text--text2'>
          Festo party app is hassle-free and is packed with features to make organising a party simple and easy.
        </span>
      </div>

      <section className='features__apps'>
        <div className='features__apps--appsbox'>
          <div className='features__apps--box-center _anim-items _anim-no-hide'>
            <img
              src={f1}
              alt="f1"
              className='features__apps--box-img'
            />
            <p className='features__apps--box-p'>Create Profile</p>
          </div>
          
          <div className='features__apps--boxrow'>
            <div className='features__apps--box-leftside _anim-items _anim-no-hide'>
              <img
                src={f2}
                alt="f2"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Find Friends</p>
            </div>
            <div className='features__apps--box-center _anim-items _anim-no-hide'>
              <img
                src={f3}
                alt="f3"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Add Friends</p>
            </div>
            <div className='features__apps--box-rightside _anim-items _anim-no-hide'>
              <img
                src={f4}
                alt="f4"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Block People</p>
            </div>
          </div>
          
          <div className='features__apps--boxrow'>
            <div className='features__apps--box-leftside _anim-items _anim-no-hide'>
              <img
                src={f5}
                alt="f5"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Create a Partiy</p>
            </div>
            <div className='features__apps--box-center _anim-items _anim-no-hide'>
              <img
                src={f6}
                alt="f6"
                className='features__apps--box-img features__apps--box-img6'
              />
              <p className='features__apps--box-p'>Public Parties</p>
            </div>
            <div className='features__apps--box-rightside _anim-items _anim-no-hide'>
              <img
                src={f7}
                alt="f7"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Private Parties</p>
            </div>
          </div>
          <div className='features__apps--boxrow'>
            <div className='features__apps--box-leftside _anim-items _anim-no-hide'>
              <img
                src={f8}
                alt="f8"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Discover Parties</p>
            </div>
            <div className='features__apps--box-center _anim-items _anim-no-hide'>
              <img
                src={f9}
                alt="f9"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Add Bank</p>
            </div>
            <div className='features__apps--box-rightside _anim-items _anim-no-hide'>
              <img
                src={f10}
                alt="f10"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Secure Payments</p>
            </div>
          </div>
          
          <div className='features__apps--boxrow'>
            <div className='features__apps--box-leftside _anim-items _anim-no-hide'>
              <img
                src={f11}
                alt="f11"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Chat on App</p>
            </div>
            <div className='features__apps--box-center _anim-items _anim-no-hide'>
              <img
                src={f12}
                alt="f12"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Notifications</p>
            </div>
            <div className='features__apps--box-rightside _anim-items _anim-no-hide'>
              <img
                src={f13}
                alt="f13"
                className='features__apps--box-img'
              />
              <p className='features__apps--box-p'>Scan QR codes</p>
            </div>
          </div>
        </div>
      </section>

      <ParallaxBanner />

      <div className='features__banner2box'>
        <div className='features__banner2'>
        <div className='features__banner2--text'>
          <span className='features__banner2--text-text1'>NO</span>
          <span className='features__banner2--text-text2'>
            More Stressful Party Planning
          </span>
        </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="FestoCookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ 
          background: "FFF",
          color: "#2B373B", 
          fontSize: "15px",
          fontWeight: "bold",
        }}
        expires={365}
        hideOnAccept='true'
      >
        We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. <a href='/privacy-policy'>Privacy Policy</a>
      </CookieConsent>
    </div>
  )
}
