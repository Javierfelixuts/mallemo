// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import {EffectCoverflow, Pagination } from 'swiper/modules';

export default function Slider() {
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
          <img alt="modern-house"  src="https://st5.depositphotos.com/1007959/64911/i/450/depositphotos_649114122-stock-photo-bold-yelllow-master-bedroom-showing.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src="https://st.depositphotos.com/1007959/55196/i/450/depositphotos_551968284-stock-photo-unfinished-raw-newly-remodeled-room.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src="https://st5.depositphotos.com/1007959/64839/i/450/depositphotos_648395738-stock-photo-lilac-master-bedroom-showing-unfinished.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/398699566.jpg?k=22ad193d1bed04b3a48fc94798cdc20a29c684f879be9d4c0ef951a397b609c7&o=&hp=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/398699618.jpg?k=e6d48ae3583b7a1b52b22dbb27bff2d496d9c58a7853e08a301f4ac3e089819f&o=&hp=1" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="modern-house" src="https://assets.easybroker.com/property_images/1648461/24859015/EB-FH8461.jpg?version=1594697222" />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
