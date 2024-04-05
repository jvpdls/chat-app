export default function BadWordAlert({ setShowBadWordAlert }) {
  function closeBadWordAlert() {
    setShowBadWordAlert(false);
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">🚨 Warning</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={closeBadWordAlert}
          ></button>
        </header>
        <section className="modal-card-body">
          You can't use bad words in this chat. If a message contains bad words,
          it won't be sent.
        </section>
        <footer className="modal-card-foot">
          <button
            type="button"
            className="button is-success"
            onClick={closeBadWordAlert}
          >
            Okay, I understand.
          </button>
        </footer>
      </div>
    </div>
  );
}
