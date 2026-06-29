import { cinzel, inter } from "../fonts/font";
import "./layout.css";
import "./globals.css";
import "./responsive.css";
import Header from "@/componenets/layout/Header";
import Footer from "@/componenets/layout/Footer";
import BackToTop from "@/componenets/shared/BackToTop";

export const metadata = {
  title: "Nawa - Officials",
  description: "Official website of Nawa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${cinzel.variable} ${inter.variable} ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}