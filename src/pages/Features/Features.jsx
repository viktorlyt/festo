import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../../components/Subscribe'

export const Features = () => {
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
        <div className='features__apps--box'>
          <img 
            src="f1.svg" 
            alt="f1"
            className='features__apps--box-img' 
          />
          <p className='features__apps--box-p'>Create Profile</p>
        </div>
        
        <div className='features__apps--boxrow'>
          <div className='features__apps--box'>
            <img
              src="f2.svg"
              alt="f2"
              className='features__apps--box-img'
            />
            <p className='features__apps--box-p'>Find Friends</p>
          </div>
          <div className='features__apps--box'>
            <img
              src="f3.svg"
              alt="f3"
              className='features__apps--box-img'
            />
            <p className='features__apps--box-p'>Add Friends</p>
          </div>
          <div className='features__apps--box'>
            <img
              src="f4.svg"
              alt="f4"
              className='features__apps--box-img'
            />
            <p className='features__apps--box-p'>Block People</p>
          </div>
        </div>
        
        <div className='features__apps--boxrow'>
          <div className='features__apps--box'>
            <img 
              src="f5.svg" 
              alt="f5"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Create a Partiy</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f6.svg" 
              alt="f6"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Public Parties</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f7.svg" 
              alt="f7"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Private Parties</p>
          </div>
        </div>

        <div className='features__apps--boxrow'>
          <div className='features__apps--box'>
            <img 
              src="f8.svg" 
              alt="f8"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Discover Parties</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f9.svg" 
              alt="f9"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Add Bank</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f10.svg" 
              alt="f10"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Secure Payments</p>
          </div>
        </div>
        
        <div className='features__apps--boxrow'>
          <div className='features__apps--box'>
            <img 
              src="f11.svg" 
              alt="f11"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Chat on App</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f12.svg" 
              alt="f12"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Notifications</p>
          </div>
          <div className='features__apps--box'>
            <img 
              src="f13.png" 
              alt="f13"
              className='features__apps--box-img' 
            />
            <p className='features__apps--box-p'>Scan QR codes</p>
          </div>
        </div>
      </section>

      <div className='features__banner2'></div>
      <div className='features__banner2--text'>
          <span className='features__banner2--text-text1'>NO</span>
          <br />
          <span className='features__banner2--text-text2'>More Stressful Party Planning</span>
        </div>
      <Subscribe />
      <Footer />
    </div>

    
  )
}
