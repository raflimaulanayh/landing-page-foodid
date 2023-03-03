import React from "react";
import CardsFavoriteFoods from "@/components/CardsFavoriteFoods";

const FavoriteFoods = () => {
  return (
    <section className="container mx-auto py-24 md:py-36 xl:pt-24 2xl:pt-96">
      <div className="flex flex-wrap">
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
    </section>
  );
};

export default FavoriteFoods;
