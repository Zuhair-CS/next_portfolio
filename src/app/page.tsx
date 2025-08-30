// import Navigation from "@/components/Navigation";

import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Plasma from '@/components/ui/Plasma';

export default function HomePage() {
  return (
    <main>
      <div style={{ width: '100%', height: '', position: 'relative' }}>
        <Plasma 
          color="#4361ee"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
