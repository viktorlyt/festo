import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide1_img from '../../images/slide1_img.png'
import slide2_img from '../../images/slide2_img.png'
import slide3_img from '../../images/slide3_img.png'

export const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      // navigation
      pagination={{ 
        clickable: true,
        backgroundColor: 'black'
      }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='slide'>
          <h3  className='slide__h'>"Truly an amazing app"</h3>
          <p className='slide__p'>"Such an amazing app, so simple and easy to use, saves all the hassle of who call getting hold of people arrange so many party's since having the app"</p>
          <div className='slide__bottom'>
            <img src={slide1_img} alt="slide__bottom--img" className='slide__bottom--img'/>
            <p className='slide__bottom--text'>Sam Whol <br/>Windsor</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <h3  className='slide__h'>"Great for girly meet ups"</h3>
          <p className='slide__p'>"Reviews are not my strong point but this app much it so easy to plan our girly meets up saving such much time and effort"</p>
          <div className='slide__bottom'>
            <img src={slide2_img} alt="slide__bottom--img" className='slide__bottom--img'/>
            <p className='slide__bottom--text'>Joanna Stevenson<br/>London</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <h3  className='slide__h'>"Best App on the market"</h3>
          <p className='slide__p'>" We hold events and parties all the time be able to share item at a click and take payment has increased our turnover by 25% keep up the good work Festo"</p>
          <div className='slide__bottom'>
            <img src={slide3_img} alt="slide__bottom--img" className='slide__bottom--img'/>
            <p className='slide__bottom--text'>Sam Wright<br/>Reading</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};