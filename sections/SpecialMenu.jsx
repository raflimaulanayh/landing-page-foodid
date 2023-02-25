import React from "react";

import CardsSpecial from "@/components/CardsSpecial";
import TitleSection from "@/components/TitleSection";

const SpecialMenu = () => {
  return (
    <section id="menu" className="container mx-auto py-28">
      <div className="pb-20">
        <TitleSection title="SPECIAL MENU" />
      </div>
      <div className="xl:hidden flex flex-wrap justify-center">
        <CardsSpecial />
      </div>
      <div className="hidden xl:flex flex-wrap justify-center">
        {/* <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <CardsSpecial />
          </SwiperSlide>
        </Swiper> */}
      </div>
    </section>
  );
};

export default SpecialMenu;
