import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import AppStoreImage from '../../images/App-Store-Symbol.png'
import QrCodeImage from '../../images/qr-code.svg'

const Error = () => {

  return (
    <div className='features'>
      <Header />

      <div className='error__text'>
        <h1 className='error__text--h'>PAYMENT ERROR</h1>
        <NewReleasesIcon className='error__big_icon'/>
      </div>

      <section className='error__main'>
        <div className='error__mainbox'>

          <span className='error__main--abz error__main--abz-flex'>
            <p>
              If you still want to join the party, please try paying again.
            </p>
          </span>

          <img
            className='error__qr-code'
            src={QrCodeImage}
          />

          <a
            href='https://apps.apple.com/en/app/festo/id1624893933'
            target='_blank'
          >
            <img
              className='error__app-store'
              src={AppStoreImage}
            />
          </a>

        </div>
      </section>

      <Footer className='error__footer'/>
    </div>
  )
}

export default Error
