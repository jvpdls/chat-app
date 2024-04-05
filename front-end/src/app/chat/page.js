"use client";

import ChatPanel from "../components/pages/chat/ChatPanel";
import Hero from "../components/layouts/PageLayout/Hero";
import socketIO from "socket.io-client";
import { useState, useEffect } from "react";
import { MessageProvider } from "../contexts/MessageContext";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function ChatPage() {
  const [chat, setChat] = useState("waiting");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [typing, setTyping] = useState(false);

  const states = { chat, messages, socket, typing };
  const setStates = { setChat, setMessages, setSocket };

  const heroProps = {
    h1: "Chat Panel",
    subtitle: "Talk to strangers from all over the world.",
  };

  useEffect(() => {
    const socket = socketIO.connect(apiUrl);
    setSocket(socket);

    socket.on("paired", () => {
      setChat("paired");
    });

    socket.on("waiting", () => {
      setChat("waiting");
    });

    socket.on("typingResponse", () => {
      setTyping(true);
    });

    socket.on("notTypingResponse", () => {
      setTyping(false);
    });

    socket.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("partnerDisconnected", () => {
      setChat("partnerDisconnected");
    });

    socket.on("disconnect", () => {
      setChat("selfDisconnected");
    });

    return () => {
      socket.off("paired");
      socket.off("waiting");
      socket.off("typingResponse");
      socket.off("notTypingResponse");
      socket.off("partnerDisconnected");
      socket.close();
    };
  }, []);

  return (
    <div>
      <Hero heroProps={heroProps} />
      <MessageProvider states={states} setStates={setStates}>
        <ChatPanel chat={chat} setChat={setChat} />
      </MessageProvider>
    </div>
  );
}
