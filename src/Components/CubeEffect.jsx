import img1 from "../../public/Images/about1.jpg"
import img2 from "../../public/Images/about2.jpg"
import img3 from "../../public/Images/about3.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

const CubeEffect = () => {
  

  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
    
    <SwiperSlide>
          <img className="w-full" src={img1} />
        
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img2}/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={img3} />
        </SwiperSlide>
      
    </Swiper>
    </>
  )
};

export default CubeEffect;
  