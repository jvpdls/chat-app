import { useRef, useState } from "react";
import { useContext } from "react";
import { MessageContext } from "@/app/contexts/MessageContext";
import ConfirmationAlert from "./alerts/ConfirmationAlert";
import BadWordAlert from "./alerts/BadWordAlert";
import filteredWords from "@/app/utils/filteredWords";

export default function MessageForm() {
  const [showConfirmationAlert, setShowConfirmationAlert] = useState(false);
  const [showBadWordAlert, setShowBadWordAlert] = useState(false);
  const { states } = useContext(MessageContext);
  const { socket, typing } = states;

  const textareaInputRef = useRef();

  let typingTimeout;

  function hasBadWords(message) {
    const paddedMessage = ` ${message} `;
    return filteredWords.some((word) => paddedMessage.includes(` ${word} `));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let userInput = textareaInputRef.current.value;
    if (hasBadWords(userInput)) {
      setShowBadWordAlert(true);
    } else {
      const message = {
        sender: socket.id,
        content: userInput,
      };
      socket.emit("newMessage", message);
      socket.emit("notTypingResponse");
      textareaInputRef.current.value = "";
    }
  }

  function handleTyping() {
    if (typingTimeout) clearTimeout(typingTimeout);

    socket.emit("typingResponse");

    typingTimeout = setTimeout(() => {
      socket.emit("notTypingResponse");
    }, 2000);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        {typing && (
          <p className="notification is-warning is-light">User is typing...</p>
        )}
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              required
              className="textarea"
              placeholder="Type a message..."
              ref={textareaInputRef}
              onKeyDown={handleTyping}
            ></textarea>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-primary">
              Send
            </button>
          </div>
          <div className="control">
            <button
              type="button"
              className="button is-danger is-light"
              onClick={() => setShowConfirmationAlert(true)}
            >
              Leave chat
            </button>
          </div>
        </div>
      </form>
      {showConfirmationAlert && (
        <ConfirmationAlert
          setShowConfirmationAlert={setShowConfirmationAlert}
        />
      )}
      {showBadWordAlert && (
        <BadWordAlert setShowBadWordAlert={setShowBadWordAlert} />
      )}
    </>
  );
}
