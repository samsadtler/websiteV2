import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/site.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sam Sadtler</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/trailz.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
