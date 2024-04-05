import Hero from "../components/layouts/PageLayout/Hero";
import Sidebar from "../components/layouts/PageLayout/Sidebar";

export default function PageLayout({ heroProps, children }) {
  return (
    <div>
      <Hero heroProps={heroProps} />
      <section className="container">
        <div className="columns mb-6">
          <div className="column is-two-thirds">
            <div className="card">
              <article className="card-content content">{children}</article>
            </div>
          </div>
          <div className="column">
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
