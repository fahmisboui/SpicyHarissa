import NavBar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import Games from "./components/Games";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Games />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}
