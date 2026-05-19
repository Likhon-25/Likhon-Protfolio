import Hero from "../components/Hero";
import { About, Skills, Projects } from "../components/Sections";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
