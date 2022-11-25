import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import NewReleasesIcon from '@mui/icons-material/NewReleases';

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

      <Footer className='error__footer'/>
    </div>
  )
}
