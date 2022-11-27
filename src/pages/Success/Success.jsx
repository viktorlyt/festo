import React, {useEffect} from 'react'
import {useSearchParams} from "react-router-dom"
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import VerifiedIcon from '@mui/icons-material/Verified'
import AppStoreImage from '../../images/App-Store-Symbol.png'
import QrCodeImage from '../../images/qr-code.svg'
import {requestToServer} from "../../helpers/requestToServer"
import CookieConsent from 'react-cookie-consent'

const Success = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
      requestToServer(
        '/payment/check-stripe',
        {
          token: searchParams.get("token")
        },
      );
  }, []);

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
            alt=''
          />

          <a
            href='https://apps.apple.com/en/app/festo/id1624893933'
            target='_blank'
            rel="noreferrer"
          >
            <img
              className='success__app-store'
              src={AppStoreImage}
              alt=''
            />
          </a>

        </div>
      </section>

      <Footer className='success__footer'/>

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

export default Success
