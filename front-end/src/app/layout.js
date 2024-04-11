import "bulma/css/bulma.min.css";
import Navbar from "./components/layouts/RootLayout/Navbar";
import Footer from "./components/layouts/RootLayout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
