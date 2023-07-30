import React, { useState, useEffect, useRef } from "react";
import styles from "./ChatBox.module.css";
import send from "../../Assets/send.png";
import microphone from "../../Assets/microphone.png";
import Image from "next/image";
import Message from "./Message";
const ChatBox = () => {
  const [chats, setChats] = useState([
    {
      username: "Anant",
      content: "Hello! How are you",
    },
    {
      username: "Arya",
      content: "Hello! Nazrul, how are you?",
    },
    {
      username: "Anant",
      content: "You did your job well",
    },
    {
      username: "Arya",
      content: "Have a great working week!",
    },
    {
      username: "Arya",
      content: "Hope You like it",
    },
  ]);

  const username = "Arya";
  const chatsRef = useRef(null);
  const msgRef = useRef(null);

  useEffect(() => {
    scrollToBot();
  }, [chats]);

  const scrollToBot = () => {
    const chatsNode = chatsRef.current;
    chatsNode.scrollTop = chatsNode.scrollHeight;
  };

  const submitMessage = (event) => {
    event.preventDefault();
    const newMessage = msgRef.current.value.trim();
    setChats((prevChats) => [
      ...prevChats,
      {
        username: "Anant",
        content: newMessage,
      },
    ]);
    msgRef.current.value = "";
  };
  console.log(chats);

  return (
    <div className={styles.chatroom}>
      <h3>Chilltime</h3>
      <ul className={styles.chats} ref={chatsRef}>
        {chats.map((chat, index) => (
          <Message key={index} chat={chat} user={username} />
        ))}
      </ul>
      <form className={styles.input} onSubmit={submitMessage}>
        <div>
          <input
            type="text"
            placeholder="Write your message here"
            ref={msgRef}
          />
        </div>
        <Image
          className={styles.sendbtn}
          src={send}
          width={25}
          height={25}
          alt="send"
        />
        <Image
          className={styles.microbtn}
          src={microphone}
          width={25}
          height={25}
          alt="send"
        />
      </form>
    </div>
  );
};

export default ChatBox;
