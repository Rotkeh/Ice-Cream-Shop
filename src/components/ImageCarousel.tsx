import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/ImageCarousel.css";

import { images } from "../variables";

export function ImageCarousel() {
  return (
    <div className="image-carousel">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={5}
        slidesPerView={4}
        loop={true}
        navigation
        autoHeight={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {images.map((i) => (
          <SwiperSlide key={i}>
            <img className="carousel-img2" src={i} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
