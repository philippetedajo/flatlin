import { Progress } from "../components";
import "../styles/global.css";

function App({ Component, pageProps }) {
  const Template = Component.Template || EmptyTemplate;
  Progress();

  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default App;
