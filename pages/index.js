import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { API_URL, fromImgToUrl } from "../utils/url";
import Link from "next/link";

const Home = ({ products }) => {
  const prods = products.map((product) => (
    <div key={product.id}>
      <Link href={`/products/${product.slug}`}>
        <a>
          <div>
            <img src={fromImgToUrl(product.image)} alt={product.name} />
          </div>
          <div>{product.name}</div>
        </a>
      </Link>
    </div>
  ));

  return (
    <div>
      <Head>
        <title>Flatline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-3 gap-4 mt-20">{prods}</div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/products/`);
  const products = await data.json();

  return {
    props: {
      products,
    },
  };
}
