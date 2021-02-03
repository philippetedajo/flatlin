import Head from "next/head";
import PageTemplate from "../templates/page.template";
import { API_URL, fromImgToUrl } from "../utils/url";
import Link from "next/link";
import Image from "next/image";

const Home = ({ products }) => {
  const prods = products.map((product) => (
    <div key={product.id}>
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
          <div>{product.name}</div>
        </a>
      </Link>
    </div>
  ));

  return (
    <div>
      <Head>
        <title>Flatlin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-104 shadow-xl flex flex-col justify-end bg-banner bg-cover bg-center pl-5 pb-5 pl-10 text-primary ">
        <div>
          <h2 className="font-bold">Car name</h2>
          <p className=" w-10/12 md:w-8/12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            libero omnis perferendis, quam quidem rerum. A accusamus aliquid
            asperiores atque culpa dicta.
          </p>
        </div>
        <div className="mt-4 w-32 border-secondary border-1 border-b" />
      </div>
      {/* */}
      {prods && prods.length === 0 ? (
        <div>
          <h2>There is no products</h2>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-20">{prods}</div>
      )}
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
