// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import your images
import image1 from "../../assets/sustrax_welcome (1).png";
import image2 from "../../assets/sustrax_screen2.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CustomSwiper = () => {
  return (
    <Swiper
      style={{ width: "100%", height: "400px" }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* Slides with images */}
      <SwiperSlide>
        <img src={image1} alt="Slide 1" style={{ width: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} alt="Slide 2" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
