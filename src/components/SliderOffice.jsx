// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import office_01 from "~/assets/images/office_01.jpeg"
import office_02 from "~/assets/images/office_02.jpeg"
import office_03 from "~/assets/images/office_03.jpeg"
import office_04 from "~/assets/images/office_04.jpeg"
import office_05 from "~/assets/images/office_05.jpeg"
import office_06 from "~/assets/images/office_06.jpeg"
import './styles.css';

// import required modules
import {EffectCoverflow, Pagination } from 'swiper/modules';

export default function SliderOffice() {
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
          <img alt="modern-house"  src={office_01.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={office_02.src} />
        </SwiperSlide>
       
        <SwiperSlide>
          <img alt="modern-house" src={office_03.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={office_04.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={office_05.src} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src={office_06.src} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
