import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-[var(--black)]">
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
