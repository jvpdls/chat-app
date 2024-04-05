import PageLayout from "../layouts/PageLayout";
import metaDataUtils from "../utils/metaDataUtils";

export const metadata = {
  title: metaDataUtils.setPageTitle("About Us"),
  description:
    "Learn more about us and our mission to connect people around the world.",
  alternates: {
    canonical: metaDataUtils.setPageCanonical("about-us"),
  },
};

export default function About() {
  const heroProps = {
    h1: "About Us",
    subtitle: metadata.description,
  };

  return (
    <PageLayout heroProps={heroProps}>
      <p>
        At Chat App, we believe in the power of connection and the joy of
        spontaneous conversations. Our platform is designed to bring people
        together from all walks of life, allowing them to engage in delightful
        and meaningful discussions without the hassle of registrations or
        unnecessary formalities.
      </p>
      <h2>Who We Are</h2>
      <p>
        Chat App was born out of a simple idea to create a space where
        individuals can connect instantly and authentically. We understand that
        the best conversations often happen spontaneously, and we wanted to
        provide a platform that fosters that kind of interaction.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission at Chat App is to break down barriers and bring people
        closer through the art of conversation. We strive to create an inclusive
        environment where everyone feels welcome to share their thoughts, ideas,
        and experiences. By eliminating the need for registration, we aim to
        make connecting with strangers as effortless and enjoyable as possible.
      </p>
      <p>
        Join us at Chat App and embark on a journey of spontaneous connections.
        Break free from the constraints of traditional communication and
        rediscover the joy of talking to strangers. Your next meaningful
        conversation is just a click away!
      </p>
    </PageLayout>
  );
}
