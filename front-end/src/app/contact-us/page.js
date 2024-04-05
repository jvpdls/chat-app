import PageLayout from "../layouts/PageLayout";
import metaDataUtils from "../utils/metaDataUtils";

export const metadata = {
  title: metaDataUtils.setPageTitle("Contact Us"),
  description: "We would love to hear from you.",
  alternates: {
    canonical: metaDataUtils.setPageCanonical("contact-us"),
  },
};

export default function ContactUs() {
  const heroProps = {
    h1: "Contact Us",
    subtitle: metadata.description,
  };

  return (
    <PageLayout heroProps={heroProps}>
      <form className="form">
        <div className="field">
          <label htmlFor="name" className="label">
            Name
          </label>
          <div className="control">
            <input
              id="name"
              className="input"
              type="text"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email" className="label">
            Email
          </label>
          <div className="control">
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Your email"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="message" className="label">
            Message
          </label>
          <div className="control">
            <textarea
              id="message"
              className="textarea"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </PageLayout>
  );
}
