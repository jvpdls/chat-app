import { useContext } from "react";
import { MessageContext } from "@/app/contexts/MessageContext";

export default function MessageList() {
  const { states } = useContext(MessageContext);
  const { socket, messages } = states;

  return (
    <div className="mb-6">
      {messages.map((message, index) => (
        <article
          key={index}
          className={`message ${
            message.sender === socket.id
              ? "is-link has-text-right"
              : "is-dark has-text-left"
          }`}
        >
          <p className="message-body">{message.content}</p>
        </article>
      ))}
    </div>
  );
}
