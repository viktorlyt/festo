import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slider2_img1 from '../../images/contact-us_banner.png'
import slider2_img2 from '../../images/features_banner4.png'
import slider2_img3 from '../../images/features_banner7.png'
import slider2_img4 from '../../images/home_banner.png'

export const Slider2 = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ 
        clickable: true,
        backgroundColor: 'black'
      }}
    >
      <SwiperSlide>
        <div className='slide1'>
          <img src={slider2_img1} alt="slider2--img" className='slide1__bottom--img1'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide1'>
          <img src={slider2_img2} alt="slider2--img" className='slide1__bottom--img1'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide1'>
          <img src={slider2_img3} alt="slider2--img" className='slide1__bottom--img1'/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide1'>
          <img src={slider2_img4} alt="slider2--img" className='slide1__bottom--img1'/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};