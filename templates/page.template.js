import { Header, Footer } from "../components";

function PageTemplate({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default PageTemplate;
