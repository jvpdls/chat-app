export default function ContentCard({ children }) {
  return (
    <section className="container mb-6">
      <div className="card">
        <div className="card-content">
          <div className="content">{children}</div>
        </div>
      </div>
    </section>
  );
}
