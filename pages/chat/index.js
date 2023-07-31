import React, { Fragment } from "react";
import "react-chat-elements/dist/main.css";
import styles from "../../styles/index.module.css";
import ChatBox from "../../components/ChatArya/ChatBox";
import Head from "next/head";
export default function index() {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/icons/arya.png" type="image/png" />
        <title>Chat with AI</title>
        <meta name="Vedas" content="Chat with our proefficient AI tool " />
      </Head>
      <div className={styles.box}>
        <ChatBox />
      </div>
    </Fragment>
  );
}
