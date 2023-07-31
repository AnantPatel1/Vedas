import React, { Fragment } from "react";
import styles from "../../styles/index.module.css";
import LoginPage from "../../components/LoginPage/LoginComponent";
import Head from "next/head";
export default function Login() {
  return (
    <Fragment>
      {" "}
      <Head>
        <link rel="icon" href="/icons/arya.png" type="image/png" />
        <title>Sign In</title>
        <meta name="Vedas" content="SignIn to chat with our AI tool " />
      </Head>
      <div className={styles.box}>
        <LoginPage />
      </div>
    </Fragment>
  );
}
