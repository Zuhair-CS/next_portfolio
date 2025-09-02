// import Navigation from "@/components/Navigation";

import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Plasma from '@/components/ui/Plasma';
import HeroSection from "@/components/HeroSection";
import { FloatingDockDemo } from "@/components/Navbar";

export default function HomePage() {
  return (
    <main>
      <div className="fixed inset-0 -z-10">
        <Plasma
          color="#4361ee"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <FloatingDockDemo />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
