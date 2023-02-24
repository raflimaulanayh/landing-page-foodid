import React from "react";

const TitleSection = ({ title }) => {
  return (
    <div className="px-5 md:mx-16">
      <h4 className="text-4xl md:text-7xl font-bold text-center">{title}</h4>
      <p className="text-gray-500 text-lg mt-5 text-center 2xl:mx-[400px]">
        Lorem ipsum dolor sit amet consectetur. Lectus sit mauris velit tellus
        ullamcorper neque ultrices id neque.
      </p>
    </div>
  );
};

export default TitleSection;
