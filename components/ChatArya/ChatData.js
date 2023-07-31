import { useState } from "react";

const ChatData = () => {
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

  return { chats, setChats };
};

export default ChatData;
