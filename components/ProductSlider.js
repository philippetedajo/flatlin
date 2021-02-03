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
    easing: "ease-in-out",
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prods = products.bestSell.map((product) => (
    <div className="p-0 pt-5 sm:p-5" key={product.id}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <div>
            <Image
              src={fromImgToUrl(
                product.image ? product.image.formats.small : ""
              )}
              alt={product.name}
              height={333}
              width={500}
            />
          </div>
          <div className="font-semibold pt-4 pb-3">{product.name}</div>
          <div className="text-gray-600">from ${product.price} </div>
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="my-16 px-5 sm:px-10">
      <h2 className="font-semibold text-2xl">Best sellers</h2>
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

//hover:scale-150 transition-all duration-700 ease-in-out
