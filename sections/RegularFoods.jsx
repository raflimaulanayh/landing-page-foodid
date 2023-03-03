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
              imgFoodsRegular="/assets/pepes-tahu.png"
              titleRegularFoods="Pepes Tahu"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ayam-bekakak.png"
              titleRegularFoods="Ayam Bekakak"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 40.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ikan-pesmol.png"
              titleRegularFoods="Ikan Pesmol"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 25.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/kue-awug.png"
              titleRegularFoods="Kue Awug"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/cilok.png"
              titleRegularFoods="Cilok Edun"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 7.000"
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
              imgFoodsRegular="/assets/tahu-sumedang.png"
              titleRegularFoods="Tahu Sumedang"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 15.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/kue-awug.png"
              titleRegularFoods="Kue Awug"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/cilok.png"
              titleRegularFoods="Cilok Edun"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ikan-pindang.png"
              titleRegularFoods="Mantan"
              descRegularFoods="Menu Special"
              hargaRegularFoods="Rp 9.999"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/karedok.png"
              titleRegularFoods="Karedok"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 10.000"
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
              imgFoodsRegular="/assets/pepes-tahu.png"
              titleRegularFoods="Pepes Tahu"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ayam-bekakak.png"
              titleRegularFoods="Ayam Bekakak"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 40.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ikan-pesmol.png"
              titleRegularFoods="Ikan Pesmol"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 25.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/sambel-pencok.png"
              titleRegularFoods="Sambel Pencok"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 5.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/nasi-liwet.png"
              titleRegularFoods="Nasi Liwet"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/tutug-oncom.png"
              titleRegularFoods="Nasi Tutug Oncom"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 12.500"
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
              imgFoodsRegular="/assets/tahu-sumedang.png"
              titleRegularFoods="Tahu Sumedang"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 15.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/kue-awug.png"
              titleRegularFoods="Kue Awug"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 10.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/cilok.png"
              titleRegularFoods="Cilok Edun"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 7.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/nasi-liwet.png"
              titleRegularFoods="Nasi Liwet"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 37.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/ikan-pindang.png"
              titleRegularFoods="Ikan Pindang"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 13.000"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardsRegularFoods
              imgFoodsRegular="/assets/tahu-sumedang.png"
              titleRegularFoods="Tahu Sumedang"
              descRegularFoods="Lorem ipsum dolor sit amet consectetur. Sollicitudin"
              hargaRegularFoods="Rp 15.000"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default RegularFoods;
