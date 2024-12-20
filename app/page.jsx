import AboutSection from "./components/about/about-section";
import ContactSection from "./components/contact/contact-section";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import ProjectSection from "./components/project/project-section";

export default function Page() {
  return (
    <div className="px-layout-padding">
      <Header />
      <main className="">
        <Hero />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
