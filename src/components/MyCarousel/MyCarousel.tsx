import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ICarousel } from "./MyCarousel.types";
import ProductCard from "../ProductCard/ProductCard";

const MyCarousel: FC<ICarousel> = ({ images, cards }) => {
  return (
    <Carousel
      className="md:w-96 w-80 relative m-auto mt-7"
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      swipeable={true}
    >
      {images
        ? images?.map((item, i) => (
            <img
              key={i}
              loading="eager"
              src={item}
              className="rounded-2xl"
              alt="carousel item 1"
            />
          ))
        : cards?.map((item, i) => (
            <center>
              <ProductCard
                key={i}
                title={item.title}
                desc={item.desc}
                image={item.image}
                link={item.link}
              />
            </center>
          ))}
    </Carousel>
  );
};

export default MyCarousel;
