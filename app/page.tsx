import HeroSection from "./components/sections/HeroSection";
import ContactSection from "./components/sections/ContactSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import AboutSection from "./components/sections/AboutSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 text-stone-900 dark:text-stone-100 bg-stone-200 dark:bg-dark-bg overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
