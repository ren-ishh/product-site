import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import QualityPromise from "./components/QualityPromise";
import Testimonials from "./components/Testimonials";
import ContactBanner from "./components/ContactBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <QualityPromise />
        <Testimonials />
        <ContactBanner />
      </main>
      <Footer />
    </>
  );
}
