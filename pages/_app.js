import Layout from "../components/Layout";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import ColorContext from "../components/context/ColorContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  function AppProvider({ children }) {
    const [color, setColor] = useState("#fff");

    const colorWhite = () => setColor("#fff");
    const colorBlack = () => setColor("#000");

    const obj = {
      color,
      colorWhite,
      colorBlack,
    };

    return (
      <ColorContext.Provider value={obj}>{children}</ColorContext.Provider>
    );
  }

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
