import React, { Fragment } from "react";
import classes from "../../styles/index.module.css";
import styles from "../../styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import SignUpComponent from "../../components/SignUpComponent/SignUpPage";
import Head from "next/head";
import theme from "../../Assets/Logo.png";
export default function Sign() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/icons/arya.png" type="image/png" />
        <title>Sign Up</title>
        <meta name="Vedas" content="SignUp to chat with our AI tool " />
      </Head>
      <div className={classes.box}>
        <div className={styles.container}>
          <div>
            <Link href="/">
              <BsArrowLeft
                style={{ margin: "40px 20px 0px 20px", fontSize: "20px" }}
              />
            </Link>
          </div>
          <div className={styles.themeContainer}>
            <Image
              className={styles.theme}
              src={theme}
              alt="Theme"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.loginContainer}>
            <header className={styles.header}>SignUp with Email</header>
            <div className={styles.description}>
              Welcome back! Sign in using your social account or email to
              continue us
            </div>
          </div>
          <SignUpComponent />
          <div className={styles.signupbox} style={{ margin: "40px 20px" }}>
            <Link className={styles.link} href="/chat">
              Create an account
            </Link>
            <p>
              <Link
                href="/Login"
                style={{
                  color: "#FFC746",
                  textDecoration: "none",
                  marginLeft: "2px",
                }}
              >
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </div>
      );
    </Fragment>
  );
}
