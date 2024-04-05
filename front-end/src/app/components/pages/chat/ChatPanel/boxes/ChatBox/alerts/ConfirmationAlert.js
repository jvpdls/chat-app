import { useContext } from "react";
import { MessageContext } from "@/app/contexts/MessageContext";

export default function ConfirmationAlert({ setShowConfirmationAlert }) {
  const { states } = useContext(MessageContext);
  const { socket } = states;

  function disableConfirmationAlert() {
    setShowConfirmationAlert(false);
  }

  function disconnect() {
    socket.disconnect();
    disableConfirmationAlert();
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">⬅️ Leave chat</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={disableConfirmationAlert}
          ></button>
        </header>
        <section className="modal-card-body">
          Are you sure you want to leave the chat?
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success" onClick={disconnect}>
            Yes, leave now.
          </button>
          <button
            type="button"
            className="button is-danger"
            onClick={disableConfirmationAlert}
          >
            No, I wan't to stay.
          </button>
        </footer>
      </div>
    </div>
  );
}
