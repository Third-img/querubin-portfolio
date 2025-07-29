import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavigationBar from "./components/NavigationBar";
import Lenis from "@studio-freight/lenis";
import './global.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Footer />
    </>
  );
}

export default App;
