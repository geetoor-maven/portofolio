import About from "../app/components/about";
import Contact from "../app/components/contact";
import Experience from "../app/components/experience";
import Intro from "../app/components/intro";
import Projects from "../app/components/projects";
import SectionDivider from "../app/components/section-divider";
import Skills from "../app/components/skills";
import Edu from "../app/components/edu"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Edu/>
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}