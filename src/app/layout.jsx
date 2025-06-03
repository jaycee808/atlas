import "./globals.css";
import Image from "next/image";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">

        {/* <div className="fixed inset-0 -z-10">
          <Image
            src="/bg-5.png"
            alt="Atlas Training in Action"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
