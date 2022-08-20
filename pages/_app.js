import '../styles/globals.css'
import App from "next/app";
import productStore from "../store/productStore";
import {createContext} from "react";

export const Context = createContext(null)

function MyApp({ Component, pageProps }) {
  return (
      <Context.Provider value={{
        store: new productStore(),
      }}>
        <Component {...pageProps} />
      </Context.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default App;