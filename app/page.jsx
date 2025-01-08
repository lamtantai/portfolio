import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import HeroSection from "./components/hero-section";
import ProjectSection from "./components/project/project-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
}
