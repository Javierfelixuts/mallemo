// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import image_01 from "~/assets/images/clean-house-02.jpeg"
import image_05 from "~/assets/images/clean-house-05.jpeg"
import image_06 from "~/assets/images/clean-house-06.jpeg"
import image_07 from "~/assets/images/clean-house-07.jpeg"
import image_08 from "~/assets/images/clean-house-08.jpeg"
import image_09 from "~/assets/images/clean-house-09.jpeg"
import './styles.css';

// import required modules
import {EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
  console.log("image_01: ", image_01);
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="modern-house"  src={image_01.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={image_05.src} />
        </SwiperSlide>
       
        <SwiperSlide>
          <img alt="modern-house" src={image_07.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={image_06.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={image_08.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={image_09.src} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
