import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../../components/Subscribe'
import logoBig from '../../images/logo-big.png'

export const ContactUs = () => {
  return (
    <div className='contactUs'>
      <Header />
      <div className='contactUs__banner'></div>

      <div className='contactUs__gray'></div>
      <div className='contactUs__white'></div>

      <section className='festo-easy contactUs__register'>
        <div className='festo-easy__red contactUs__register--red'>
          <img 
            src={logoBig}
            alt="logo-big" 
            className='contactUs__register--red-logo'
          />
        </div>
        <div className='contactUs__register--infobox'>
          <div className='contactUs__register--info'>
            <h3 className='contactUs__register--info-h2'>Register your interest.</h3>

            <form 
              action="" 
              method='post'
              className='contactUs__register--form'
            >
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="firstName" className='contactUs__register--form-row__item--label'>
                    First Name
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='firstName'
                    required
                  >
                  </input>
                </span>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="lastName" className='contactUs__register--form-row__item--label-NR'>
                    Last Name
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='lastName'
                  >
                  </input>
                </span>
              </div>
              
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="email" className='contactUs__register--form-row__item--label'>
                    Email
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='email'
                    id='email'
                    required
                    pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                  >
                  </input>
                </span>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="phone" className='contactUs__register--form-row__item--label-NR'>
                    Phone
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='phone'
                    id='phone'
                  >
                  </input>
                </span>
              </div>
              
              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="massage" className='contactUs__register--form-row__item--label-NR'>
                    Leave us a message...
                  </label>
                  <textarea
                    className='contactUs__register--form-row__item--textarea'
                    type='text'
                    id='massage'
                  >
                  </textarea>
                </span>
              </div>

              <div className='contactUs__register--form-row'>
                <span className='contactUs__register--form-row__item'>
                  <label htmlFor="company" className='contactUs__register--form-row__item--label-NR'>
                    Company
                  </label>
                  <input
                    className='contactUs__register--form-row__item--input'
                    type='text'
                    id='company'
                    placeholder='company'
                  >
                  </input>
                </span>
              </div>

              <button type='submit' className='contactUs__register--form-btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className='contactUs__white'></div>
      <div className='contactUs__red'></div>

      <Subscribe />
      <Footer />
    </div>

    
  )
}
