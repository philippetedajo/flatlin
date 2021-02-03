import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { fromImgToUrl } from "../utils/url";

const ProductSlider = (products) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prods = products.bestSell.map((product) => (
    <div className="border-primary p-5 " key={product.id}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <div className=" border-primary border-2 hover:translate-y-1.5">
            <Image
              src={fromImgToUrl(
                product.image ? product.image.formats.small : ""
              )}
              alt={product.name}
              height={333}
              width={500}
            />
          </div>
          <div className="font-semibold">{product.name}</div>
          <div className="">from ${product.price} </div>
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="mt-14 px-10">
      <h2 className="mb-5 font-semibold text-2xl">Best sellers</h2>
      {prods && prods.length === 0 ? (
        <div>
          <h2>There is no best seller products</h2>
        </div>
      ) : (
        <Slider {...settings}> {prods}</Slider>
      )}
    </div>
  );
};

export default ProductSlider;
