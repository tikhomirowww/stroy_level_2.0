import React, { FC } from "react";
import { IProductCard } from "./ProductCard.types";
import Image from "next/image";
import Link from "next/link";

const ProductCard: FC<IProductCard> = ({ image, desc, title, link }) => {
  return (
    <div className="bg-white w-72 p-2 border-2 border-black mx-8">
      <Image
        className="w-full h-56 object-cover"
        width={200}
        height={200}
        src={image}
        alt="card image"
      />
      <hr className="border-0 h-[2px] bg-black my-4" />
      <h2 className="text-2xl font-medium">{title}</h2>
      <p className="my-3 h-24">{desc}</p>
      <Link href={link}>
        <button className="bg-black text-white p-2 border-white border hover:shadow-black transition-all hover:scale-105 duration-200 hover:shadow-2xl">
          Подробнее
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
