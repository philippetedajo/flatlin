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
      <div className="h-104 shadow-xl flex flex-col justify-end bg-banner bg-cover bg-center pl-5 pb-5 pl-10 text-primary ">
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
      <ProductSlider bestSell={products} />
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
