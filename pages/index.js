import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { API_URL } from "../utils/url";
import { ProductSlider } from "../components";

const Home = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Flatlin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-104 shadow-xl flex flex-col justify-end bg-banner bg-cover bg-center pl-5 sm:pl-10 text-primary ">
        <div>
          <h2 className="font-bold text-6xl">Product name</h2>
          <p className=" w-10/12 md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            libero omnis perferendis, quam quidem rerum. A accusamus aliquid
            asperiores atque culpa dicta.
          </p>
        </div>
        <div className="mt-4 w-32 border-secondary border-1 border-b" />
      </div>
      {/*===================================================*/}
      <ProductSlider bestSell={products} />
      {/*===================================================*/}
      <div className="w-full flex flex-col md:flex-row px-5 sm:px-10 my-14 ">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-5xl md:text-6xl text-center md:text-left font-semibold">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="text-center md:text-left my-7 md:w-10/12 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid
            minus quod tempora? Aliquam dolorem enim et explicabo facilis
            laborum officiis sequi vel. Atque deserunt impedit natus odit quidem
            reprehenderit.
          </p>
        </div>
        <div className="flex flex-col  md:w-1/2">
          <img
            src="/images/gez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg"
            alt="img"
          />
          <small className="font-semibold mt-3">
            View this product &#x2192;{" "}
          </small>
        </div>
      </div>
      {/*===================================================*/}
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/products/`);
  const products = await data.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products,
    },
  };
}
