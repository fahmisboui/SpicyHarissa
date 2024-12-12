import NavBar from "./components/Navbar";
import Hero from './components/Hero';
import Services from './components/Services';
import Games from "./components/Games";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <Games />
    </div>
  );
}
