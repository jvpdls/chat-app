export default function Sidebar() {
  return (
    <aside className="card">
      <div className="card-header">
        <p className="card-header-title">Join a friendly conversation</p>
      </div>
      <div className="card-content content">
        <p>Chat with new people and make friends in a safe environment.</p>
        <p>
          That's the perfect place to meet new people, make friends and spend
          some good time with other people.
        </p>
        <a href="/chat" className="button is-link is-fullwidth">Try now</a>
      </div>
    </aside>
  );
}
