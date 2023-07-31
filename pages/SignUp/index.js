import React, { Fragment } from "react";
import styles from "../../styles/index.module.css";
import SignUpComponent from "../../components/SignUpComponent/SignUpPage";
import Head from "next/head";
export default function Sign() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/icons/arya.png" type="image/png" />
        <title>Sign Up</title>
        <meta name="Vedas" content="SignUp to chat with our AI tool " />
      </Head>
      <div className={styles.box}>
        <SignUpComponent />
      </div>
    </Fragment>
  );
}
