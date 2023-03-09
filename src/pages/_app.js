import "@/styles/globals.css";
import {store} from "../../redux/store";
import { Provider } from "react-redux";
import { Fragment } from "react";
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
