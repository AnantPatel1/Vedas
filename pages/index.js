import { Fragment, useState, useEffect } from "react";
import HomePage from "../components/Home/HomePage";
import LandingPage from "../components/LoaderPage/LoadingPage";
import styles from "../styles/index.module.css";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Show the spinner for 1 seconds (2000 milliseconds)

    return () => clearTimeout(timer);
  }, []); // Run this effect only once on initial render
  return (
    <Fragment>
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
