import Head from "next/head";
import { API_URL, fromImgToUrl } from "../../utils/url";
import { decimal } from "../../utils/decimal";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";

import Router from "next/router";

const Product = ({ product }) => {
  return (
    <>
      <Head>
        {product.meta_title && <title> {product.meta_title} </title>}
        {product.meta_description && (
          <meta name="description" content={product.meta_description} />
        )}
      </Head>
      <div className="ml-10 mt-5 ">
        <div
          className="flex items-center cursor-pointer text-third"
          onClick={() => Router.back()}
        >
          <BiArrowBack className="mr-2" /> back
        </div>
        <h2> {product.name} </h2>
        <Image
          src={fromImgToUrl(product.image.formats.medium)}
          alt={product.name}
          height={500}
          width={750}
        />
        <p>{product.content}</p>
        <p>${decimal(product.price)}</p>
      </div>
    </>
  );
};

export default Product;

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const data = await fetch(`${API_URL}/products/?slug=${slug}`);
  const product = await data.json();

  return {
    props: {
      product: product[0],
    },
  };
}

export async function getStaticPaths() {
  //retrive all paths
  const data = await fetch(`${API_URL}/products/`);
  const products = await data.json();
  //retun it to the next js context
  return {
    paths: products.map((product) => ({
      params: {
        slug: String(product.slug),
      },
    })),
    fallback: false, //return 404 if params is not match
  };
}
