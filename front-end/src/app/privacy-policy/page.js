import PageLayout from "../layouts/PageLayout";
import metaDataUtils from "../utils/metaDataUtils";

export const metadata = {
  title: metaDataUtils.setPageTitle("Privacy Policy"),
  description:
    "Learn more about our Privacy Policy and how we protect your data.",
  alternates: {
    canonical: metaDataUtils.setPageCanonical("privacy-policy"),
  },
};

export default function About() {
  const heroProps = {
    h1: "Privacy Policy",
    subtitle: metadata.description,
  };

  return (
    <PageLayout heroProps={heroProps}>
      <p>
        Thank you for using Chat App. This Privacy Policy outlines how we
        collect, use, and protect your personal information when you use our
        website and services.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect information that you voluntarily provide when using Chat App,
        such as chat content, device information, and any other data you choose
        to share.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We use the information collected to facilitate spontaneous
        conversations, improve our services, and ensure a safe and respectful
        environment for all users. Your data will not be shared with third
        parties without your explicit consent.
      </p>
      <h2>Cookies and Similar Technologies</h2>
      <p>
        We may use cookies and similar technologies to enhance your experience
        on Chat App. You can manage your cookie preferences through your browser
        settings.
      </p>
      <h2>Security</h2>
      <p>
        We take the security of your information seriously and implement
        measures to protect against unauthorized access and data breaches.
      </p>
      <h2>Your Choices</h2>
      <p>
        You have the right to access, update, or delete your personal
        information. If you have any privacy-related concerns, please{" "}
        <a href="/contact-us">contact us</a>.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page, and the effective date will be updated accordingly.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please{" "}
        <a href="/contact-us">contact us</a>.
      </p>
      <p>
        This Privacy Policy applies only to information collected through Chat
        App and not to information collected offline or through third-party
        websites. By using Chat App, you consent to our Privacy Policy.
      </p>
    </PageLayout>
  );
}
