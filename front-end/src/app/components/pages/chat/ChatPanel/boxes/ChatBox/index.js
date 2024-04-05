import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

export default function ChatBox() {

  return (
    <div className="card mb-6">
      <div className="card-header">
        <p className="card-header-title">
          You're talking to a stranger now. Be kind and respectful.
        </p>
      </div>
      <div className="card-content">
        <MessageList />
        <MessageForm />
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          Are you feeling umconfortable with the conversation? You can leave the
          chat at any time by clicking the red button.
        </div>
      </div>
    </div>
  );
}
