import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
