import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Slider2 } from '../../components/Slider2/Slider2'
import { Subscribe } from '../../components/Subscribe/Subscribe'
// import flagOfEngland from '../../images/flag-of-england.png'
import slide1_img from '../../images/slide1_img.png'
import usd from '../../images/noun-usd-square-4425742.svg'
import pound from '../../images/pound.svg'
import location from '../../images/location.svg'
import nounDate from '../../images/noun-date-1146237.svg'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getParty } from '../../helpers/axiosParty'

export const Party = () => {
  const { id } = useParams();
  const [party, setParty] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const partyFromServer = await getParty(id);

      if ('Error' in partyFromServer) {
        return;
      }

      setParty(partyFromServer);
    }
    fetchData();
    
  }, [id]); 

  console.log(party);

  return (
    <div className='party'>
      {party && (
        <>
          <Header />

          <div className='party__banner'></div>
          <div className='party__container grid'>
            <div className='party__left'>
              <a className='party__left--a' href="/">
                <h3 className='party__left--h3'>🠔 All events</h3>
              </a>
              <h2 className='party__left--h2'>
                {party.title} 
              </h2>

              <div className="party__slider--box">
                <Slider2 party={party}/>
              </div>

              <h3 className='party__left--host'>
                <div className='party__left--host-l'>
                  <img
                    src={party.host.photo}
                    alt='flagOfEngland'
                    className='party__left--host-l-img'
                  />
                  <div className='party__left--host-l-text'>
                    <p className='party__left--host-l-text1'>{party.host.name}</p>
                    <p className='party__left--host-l-text2'>Host</p>
                  </div>
                </div>
                <img
                  src={slide1_img}
                  alt='flagOfEngland'
                  className='party__left--host-img'
                />
              </h3>
              
              <h3 className='party__left--price'>
                <img 
                  src={usd} 
                  alt="bank128" 
                  className='party__left--price-usd'
                />
                {party.is_free === 0 
                  ? (
                      <span>
                        <img
                          src={pound}
                          alt="bank128"
                          className='party__left--price-pound'
                        />
                        <span>{party.price}</span>
                      </span>
                  )
                  : (
                    <span>Free</span>
                  )
                }
              </h3>

              <h3 className='party__left--date'>
                <img 
                  src={nounDate} 
                  alt="nounDate" 
                  className='party__left--date-date'
                />
                <span className='party__left--date-span'>{party.at_date} - {party.from_time}</span>
              </h3>
             
              <h3 className='party__left--location'>
                <img 
                  src={location} 
                  alt="location" 
                  className='party__left--location-svg'
                />
                <span className='party__left--location-span'>{party.location}</span>
              </h3>

              <h3 className='party__left--age'>Age limit: <b>{party.min_age} to {party.max_age}</b></h3>
              
              <h3 className='party__left--rate'>
                <span className='party__left--rate-span'>Ratings</span>
                <div className={`stars stars--${party.avg_rating}`}>
                  <div className="stars_star"></div>
                  <div className="stars_star"></div>
                  <div className="stars_star"></div>
                  <div className="stars_star"></div>
                  <div className="stars_star"></div>
                </div>
              </h3>
              
              {party.is_free === 0 &&
                <button className='party__left--btn' type='button'>Pay Now</button>
              }
            </div>

            <div className='party__right'>
              <div className='party__right--notes'>
                <h3 className='party__right--notes-h3'>Notes</h3>
                <p className='party__right--notes-p'>
                  <div dangerouslySetInnerHTML={{ __html: party.note }} />
                </p>
              </div>
              <div className='party__right--map'></div>
              <button className='party__right--btn' type='button'>Buy</button>
            </div>
          </div>

          <Subscribe />
          <Footer />
        </>  
      )}
    </div>
  );
};
