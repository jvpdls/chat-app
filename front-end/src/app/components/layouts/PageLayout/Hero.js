export default function Hero({ heroProps }) {
  const { h1, subtitle } = heroProps;
  
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{h1}</h1>
          <p className="subtitle">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
