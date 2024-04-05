import "bulma/css/bulma.min.css";
import Navbar from "./components/layouts/RootLayout/Navbar";
import Footer from "./components/layouts/RootLayout/Footer";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="none" />
      </Head>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
