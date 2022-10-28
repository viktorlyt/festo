import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import VerifiedIcon from '@mui/icons-material/Verified'
import AppStoreImage from '../../images/App-Store-Symbol.png'
import QrCodeImage from '../../images/qr-code.svg'

const Success = () => {
  return (
    <div className='features'>
      <Header />

      <div className='success__text'>
        <h1 className='success__text--h'>THANK YOU</h1>
        <VerifiedIcon className='success__big_icon'/>
      </div>

      <section className='success__main'>
        <div className='success__mainbox'>

          <h3 className='success__main--h3'>You have purchased a ticket to the party.</h3>

          <span className='success__main--abz success__main--abz-flex'>
            <p>
              You can view your ticket in the application
            </p>
          </span>

          <img
            className='success__qr-code'
            src={QrCodeImage}
          />

          <a
            href='https://apps.apple.com/en/app/festo/id1624893933'
            target='_blank'
          >
            <img
              className='success__app-store'
              src={AppStoreImage}
            />
          </a>

        </div>
      </section>

      <Footer className='success__footer'/>
    </div>
  )
}

export default Success
