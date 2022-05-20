import React from "react";

export const CategoryCard = (props) => {
  const { category, image } = props;
  return (
    <>
      <img
        src={image}
        alt="Avatar"
        loading="lazy"
        className="object-cover hover:scale-110 w-full h-full will-change-auto brightness-50 hover:brightness-75 transition-all duration-150 ease-linear"
      />
      <p className="absolute w-full top-1/2 text-gray-100 p-4 leading-6 text-xl capitalize font-bold text-center">
        {category}
      </p>
    </>
  );
};
