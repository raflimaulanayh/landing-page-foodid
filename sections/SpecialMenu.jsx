import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardsSpecial from "@/components/CardsSpecial";
import TitleSection from "@/components/TitleSection";

const SpecialMenu = () => {
  return (
    <section id="menu" className="container mx-auto py-28">
      <div className="pb-20">
        <TitleSection title="SPECIAL MENU" />
      </div>
      <div className="xl:hidden flex flex-wrap justify-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/tutug-oncom.png"
              titleSpecialMenu="Nasi Tutug Oncom"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="12.500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/karedok.png"
              titleSpecialMenu="Karedok"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/sambel-pencok.png"
              titleSpecialMenu="Sambel Pencok"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="5.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/nasi-liwet.png"
              titleSpecialMenu="Nasi Liwet"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/gurame-bakar.png"
              titleSpecialMenu="Gurame Bakar"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="21.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/tahu-sumedang.png"
              titleSpecialMenu="Tahu Sumedang"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="15.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden xl:flex flex-wrap justify-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/tutug-oncom.png"
              titleSpecialMenu="Nasi Tutug Oncom"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="12.500"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/karedok.png"
              titleSpecialMenu="Karedok"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/sambel-pencok.png"
              titleSpecialMenu="Sambel Pencok"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="5.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/nasi-liwet.png"
              titleSpecialMenu="Nasi Pindang"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/gurame-bakar.png"
              titleSpecialMenu="Gurame Bakar"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="21.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsSpecial
              imgSpecialMenu="/assets/tahu-sumedang.png"
              titleSpecialMenu="Tahu Sumedang"
              imgRating="/assets/star-rating.svg"
              hargaSpecialMenu="15.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SpecialMenu;
