import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import TechnicalSkills from "@/components/TechnicalSkills";
export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechnicalSkills />
        <Contact />
      </main>
    </div>
  );
}
