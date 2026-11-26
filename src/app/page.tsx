import Footer from "@/components/layout/Footer";
import AboutSection from "@/sections/home/AboutSection";
import AdvantagesSection from "@/sections/home/AdvantagesSection";
import ContactSection from "@/sections/home/ContactSection";
import HomepageMotion from "@/sections/home/HomepageMotion";
import Hero from "@/sections/home/Hero";
import ProjectsSection from "@/sections/home/ProjectsSection";
import ServicesSection from "@/sections/home/ServicesSection";

export default function HomePage() {
  return (
    <>
      <main id="home" tabIndex={-1}>
        <Hero
          posterSrc="/media/hero-building-poster.webp"
          videoSrc="/media/hero-building.mp4"
        />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <AdvantagesSection />
        <ContactSection />
        <HomepageMotion />
      </main>
      <Footer />
    </>
  );
}
