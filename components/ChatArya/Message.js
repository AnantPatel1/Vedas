import React from "react";
import Image from "next/image";
import styles from "./ChatBox.module.css";
import ai from "../../Assets/aiarya.png";
const Message = ({ chat, user }) => (
  <li
    className={`${styles.chat} ${
      user === chat.username ? styles.left : styles.right
    }`}
  >
    {user === chat.username && (
      <Image
        src={ai}
        alt={`${chat.username}'s profile pic`}
        width={30}
        height={30}
        className={styles.aiImage}
      />
    )}
    <div
      className={`${styles.content} ${
        user === chat.username ? styles.contentleft : styles.contentright
      }`}
    >
      {chat.content}
    </div>
  </li>
);

export default Message;
