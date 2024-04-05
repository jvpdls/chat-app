import Hero from "./components/layouts/PageLayout/Hero";
import HomeContent from "./components/pages/home/HomeContent";
import metaDataUtils from "./utils/metaDataUtils";

export const metadata = {
  title: metaDataUtils.setPageTitle("Home"),
  description: "A simple chat app that connects people around the world.",
  alternates: {
    canonical: metaDataUtils.setPageCanonical(""),
  },
};

export default function Home() {
  const heroProps = {
    h1: "Chat App",
    subtitle: metadata.description,
  };

  return (
    <div>
      <Hero heroProps={heroProps}/>
      <HomeContent/>
    </div>
  )
}
