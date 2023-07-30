import React, { Fragment } from "react";
import "react-chat-elements/dist/main.css";
import styles from "../../styles/index.module.css";
import ChatBox from "../../components/ChatArya/ChatBox";
export default function index() {
  return (
    <Fragment>
      <div className={styles.box}>
        <ChatBox />
      </div>
    </Fragment>
  );
}
