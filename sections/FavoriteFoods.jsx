import React from "react";
import CardsFavoriteFoods from "@/components/CardsFavoriteFoods";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FavoriteFoods = () => {
  return (
    <section className="container mx-auto py-16 md:py-36 xl:pt-24 2xl:pt-96">
      <div className="hidden lg:flex flex-wrap gap-10">
        <CardsFavoriteFoods
          imgFavoriteFood="/assets/ikan-pindang.png"
          titleFavoriteFood="Ikan Pindang"
          priceFavoriteFood="13.000"
          descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
        />
        <CardsFavoriteFoods
          imgFavoriteFood="/assets/nasi-liwet.png"
          titleFavoriteFood="Nasi Liwet"
          priceFavoriteFood="37.000"
          descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
        />
        <CardsFavoriteFoods
          imgFavoriteFood="/assets/gurame-bakar.png"
          titleFavoriteFood="Gurame Bakar"
          priceFavoriteFood="21.000"
          descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
        />
        <CardsFavoriteFoods
          imgFavoriteFood="/assets/tahu-sumedang.png"
          titleFavoriteFood="Tahu Sumedang"
          priceFavoriteFood="15.000"
          descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
        />
      </div>
      <div className="flex lg:hidden flex-wrap justify-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsFavoriteFoods
              imgFavoriteFood="/assets/ikan-pindang.png"
              titleFavoriteFood="Ikan Pindang"
              descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              priceFavoriteFood="Rp 13.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsFavoriteFoods
              imgFavoriteFood="/assets/nasi-liwet.png"
              titleFavoriteFood="Nasi Liwet"
              descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              priceFavoriteFood="Rp 37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsFavoriteFoods
              imgFavoriteFood="/assets/gurame-bakar.png"
              titleFavoriteFood="Gurame Bakar"
              descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              priceFavoriteFood="Rp 21.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsFavoriteFoods
              imgFavoriteFood="/assets/tahu-sumedang.png"
              titleFavoriteFood="Tahu Sumedang"
              descFavoriteFood="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              priceFavoriteFood="Rp 15.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default FavoriteFoods;
