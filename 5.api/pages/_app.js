import FooterCom from "@/components/FooterCom";
import HeaderCom from "@/components/HeaderCom";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  if (getLayout) {
    return getLayout(
      <>
        <Component {...pageProps} />
      </>
    );
  }
  return(
    <>
      <HeaderCom />
      <Component {...pageProps} />
      <FooterCom />
    </>
  );
}
