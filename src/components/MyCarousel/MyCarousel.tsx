import React, { FC } from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ICarousel } from "./MyCarousel.types";

const MyCarousel: FC<ICarousel> = ({ images }) => {
  return (
    <Carousel
      className="w-96"
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      swipeable={true}
    >
      {images.map((item) => (
        <img src={item} className="rounded-2xl" alt="carousel item 1" />
      ))}
    </Carousel>
  );
};

export default MyCarousel;
