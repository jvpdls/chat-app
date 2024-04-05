export default function CTA() {
  return (
    <div className="notification is-link is-light">
      <div className="card-content columns is-align-items-center">
        <div className="column is-two-thirds">
          <h2 className="title is-4">Chat with a random person right now!</h2>
          <p>
            Join the chat room and start chatting with random people. Easy to
            use and no registration required.
          </p>
        </div>
        <div className="column">
          <a href="/chat" className="button is-link is-fullwidth">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
