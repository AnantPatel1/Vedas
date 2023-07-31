import React, { useState, useRef } from "react";
import styles from "./ChatBox.module.css";
import send from "../../Assets/send.png";
import microphone from "../../Assets/microphone.png";
import Image from "next/image";
import Message from "./Message";
import ChatHeader from "../Reusable/ChatHeader";

const ChatBox = () => {
  // Initial chat messages
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

  // Current user's username (Assuming it's "Arya" for this chatbox)
  const username = "Arya";

  // Refs for chat messages container and message input field
  const chatsRef = useRef(null);
  const msgRef = useRef(null);

  // Function to submit a new message
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

  return (
    <div className={styles.chatroom}>
      {/* Comment: ChatHeader component */}
      <ChatHeader />

      <ul className={styles.chats} ref={chatsRef}>
        {/* Mapping through the chat messages and rendering Message components */}
        {chats.map((chat, index) => (
          <Message key={index} chat={chat} user={username} />
        ))}
      </ul>

      {/* Form for inputting new messages */}
      <form className={styles.input} onSubmit={submitMessage}>
        <div className={styles.inputbox}>
          <input
            type="text"
            placeholder="Write your message here"
            ref={msgRef}
            style={{ width: "70%" }}
          />
        </div>
        {/* Send button */}
        <Image
          className={styles.sendbtn}
          src={send}
          width={25}
          height={25}
          alt="send"
          loading="lazy"
        />
        {/* Microphone button */}
        <Image
          className={styles.microbtn}
          src={microphone}
          width={25}
          height={25}
          alt="send"
          loading="lazy"
        />
      </form>
    </div>
  );
};

export default ChatBox;
