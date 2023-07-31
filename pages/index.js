import { Fragment, useState, useEffect } from "react";
import HomePage from "../components/Home/HomePage";
import LandingPage from "../components/LoaderPage/LoadingPage";
import styles from "../styles/index.module.css";
import Head from "next/head";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Show the spinner for 2 seconds (2000 milliseconds)

    return () => clearTimeout(timer);
  }, []); // Run this effect only once on initial render
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/icons/favicon.png" type="image/png" />
        <title>Vedas</title>
        <meta name="Vedas" content="Brings you closer to the devine power" />
      </Head>
      {loading ? (
        <div className={styles.box}>
          <LandingPage />
        </div>
      ) : (
        <div className={styles.box}>
          <HomePage />
        </div>
      )}
    </Fragment>
  );
}
