import { Provider } from "react-redux";
import store from "../src/redux/store";
import "@/styles/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
