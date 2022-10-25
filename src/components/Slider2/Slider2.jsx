import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider2 = ({ party }) => {
  const imgs = party.party_images;

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
      {imgs.map(img => (
        <SwiperSlide key={img.id}>
          <div className='slide1'>
            <img 
              src={img.image_url} 
              alt="slider2--img" 
              className='slide1__bottom--img1'
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};