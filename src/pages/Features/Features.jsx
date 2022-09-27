import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Subscribe } from '../../components/Subscribe'

export const Features = () => {
  return (
    <div className='features'>
      <Header />
      <div 
        className='features__banner' 
        style={{ backgroundImage: "url(/features_banner.png)" }}
      >
      </div>

      <Subscribe />
      <Footer />
    </div>

    
  )
}
