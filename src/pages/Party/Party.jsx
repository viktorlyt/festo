import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Slider2 } from '../../components/Slider2/Slider2'
import { Subscribe } from '../../components/Subscribe/Subscribe'
import flagOfEngland from '../../images/flag-of-england.png'
import slide1_img from '../../images/slide1_img.png'
import usd from '../../images/noun-usd-square-4425742.svg'
import nounDate from '../../images/noun-date-1146237.svg'

export const Party = () => {
  return (
    <div className='party'>
      <Header />

      <div className='party__banner'></div>
      <div className='party__container grid'>
        <div className='party__left'>
          <a className='party__left--a' href="/">
            <h3 className='party__left--h3'>🠔 All events</h3>
          </a>
          <h2 className='party__left--h2'>
            WEEKND 26.10 🔥 UK Grime Party 
            <img 
              src={flagOfEngland} 
              alt='flagOfEngland' 
              className='party__left--h2-flag'
            /> 
          </h2>

          <div className="party__slider--box">
            <Slider2 />
          </div>

          <h3 className='party__left--host'>
            <div className='party__left--host-l'>
              <img
                src={slide1_img}
                alt='flagOfEngland'
                className='party__left--host-l-img'
              />
              <div className='party__left--host-l-text'>
                <p className='party__left--host-l-text1'>Denys Bondarenko</p>
                <p className='party__left--host-l-text2'>Host</p>
              </div>
            </div>
            <img
              src={slide1_img}
              alt='flagOfEngland'
              className='party__left--host-img'
            />
          </h3>
          
          <h3 className='party__left--date'>
            <img 
              src={nounDate} 
              alt="nounDate" 
              className='party__left--date-date'
            />
            <span className='party__left--date-span'>26 Oct 2022 - 09:00 PM <b>To</b> 03:00 AM</span>
          </h3>

          <h3 className='party__left--date'>
            <img 
              src={usd} 
              alt="bank128" 
              className='party__left--date-usd'
            />
            $ 5
          </h3>

          <h3 className='party__left--age'>Age limit: <b>18 to 60</b></h3>
          
          <h3 className='party__left--rate'>
            <span className='party__left--rate-span'>Ratings</span>
            <div className="stars stars--4">
              <div className="stars_star"></div>
              <div className="stars_star"></div>
              <div className="stars_star"></div>
              <div className="stars_star"></div>
              <div className="stars_star"></div>
            </div>
          </h3>
          
          <button className='party__left--btn' type='button'>Buy</button>
        </div>

        <div className='party__right'>
          <div className='party__right--notes'>
            <h3 className='party__right--notes-h3'>Notes</h3>
            <p className='party__right--notes-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus maiores atque autem adipisci fugit doloremque corrupti. Nesciunt laboriosam reprehenderit voluptate delectus ipsa nostrum praesentium qui quae placeat aliquam, consequuntur, recusandae sunt dolorem sint eligendi, quidem nulla veritatis culpa dolor dolorum amet beatae quod deleniti? Sapiente maxime ea veniam atque dicta in aliquam veritatis, corr
            </p>
            <p className='party__right--notes-p'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minus maiores atque autem adipisci fugit doloremque corrupti. Nesciunt laboriosam reprehenderit voluptate delectus ipsa nostrum praesentium qui quae placeat aliquam, consequuntur, recusandae sunt dolorem sint eligendi, quidem nulla veritatis culpa dolor dolorum amet beatae quod deleniti? Sapiente maxime ea veniam atque dicta in aliquam veritatis, 
            </p>
          </div>
          <div className='party__right--map'></div>
          <button className='party__right--btn' type='button'>Buy</button>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  )
}
