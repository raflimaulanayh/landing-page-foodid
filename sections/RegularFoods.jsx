import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CardsRegularFoods from "./../components/CardsRegularFoods";
import TitleSection from "@/components/TitleSection";

const RegularFoods = () => {
  return (
    <section className="container mx-auto pb-20">
      <div className="pb-20">
        <TitleSection title="OUR REGULAR FOOD" />
      </div>
      <div className="flex xl:hidden flex-wrap justify-center">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/pepes-tahu.png"
              titleFavoriteFoods="Pepes Tahu"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ayam-bekakak.png"
              titleFavoriteFoods="Ayam Bekakak"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 40.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ikan-pesmol.png"
              titleFavoriteFoods="Ikan Pesmol"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 25.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/kue-awug.png"
              titleFavoriteFoods="Kue Awug"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/cilok.png"
              titleFavoriteFoods="Cilok Edun"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 7.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex xl:hidden flex-wrap justify-center mt-14">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/tahu-sumedang.png"
              titleFavoriteFoods="Tahu Sumedang"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 15.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/kue-awug.png"
              titleFavoriteFoods="Kue Awug"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/cilok.png"
              titleFavoriteFoods="Cilok Edun"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ikan-pindang.png"
              titleFavoriteFoods="Mantan"
              descFavoriteFoods="Menu Special"
              hargaFavoriteFoods="Rp 9.999"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/Karedok.png"
              titleFavoriteFoods="Karedok"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 10.000"
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
            <CardsRegularFoods
              imgFoodsFavorite="/assets/pepes-tahu.png"
              titleFavoriteFoods="Pepes Tahu"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ayam-bekakak.png"
              titleFavoriteFoods="Ayam Bekakak"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 40.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ikan-pesmol.png"
              titleFavoriteFoods="Ikan Pesmol"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 25.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/sambel-pencok.png"
              titleFavoriteFoods="Sambel Pencok"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 5.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/nasi-liwet.png"
              titleFavoriteFoods="Nasi Liwet"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/tutug-oncom.png"
              titleFavoriteFoods="Nasi Tutug Oncom"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 12.500"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden xl:flex flex-wrap justify-center mt-14">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/tahu-sumedang.png"
              titleFavoriteFoods="Tahu Sumedang"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 15.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/kue-awug.png"
              titleFavoriteFoods="Kue Awug"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/cilok.png"
              titleFavoriteFoods="Cilok Edun"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/nasi-liwet.png"
              titleFavoriteFoods="Nasi Liwet"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/ikan-pindang.png"
              titleFavoriteFoods="Ikan Pindang"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 13.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsFavorite="/assets/tahu-sumedang.png"
              titleFavoriteFoods="Tahu Sumedang"
              descFavoriteFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaFavoriteFoods="Rp 15.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default RegularFoods;
