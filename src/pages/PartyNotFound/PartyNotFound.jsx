import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { Subscribe } from '../../components/Subscribe/Subscribe';
import CookieConsent from 'react-cookie-consent';

export const PartyNotFound = () => {

  return (
    <div className='features'>
      <Header />

      <div className='error__text'>
        <h1 className='error__text--h'>This party not found</h1>
        <NewReleasesIcon className='error__big_icon'/>
      </div>

      <section className='error__main'>
        <div className='error__mainbox'>
          <span className='error__main--abz error__main--abz-flex'>
            <p className='error__main--text'>
              Something went wrong, please try again.
            </p>
          </span>
        </div>
      </section>

      <Subscribe />
      <Footer className='error__footer'/>
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
