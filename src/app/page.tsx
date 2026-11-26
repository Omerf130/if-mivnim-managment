import AboutSection from "@/sections/home/AboutSection";
import Hero from "@/sections/home/Hero";
import ProjectsSection from "@/sections/home/ProjectsSection";
import ServicesSection from "@/sections/home/ServicesSection";

export default function HomePage() {
  return (
    <main id="home" tabIndex={-1}>
      <Hero
        posterSrc="/media/hero-building-poster.webp"
        videoSrc="/media/hero-building.mp4"
      />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <div id="contact" tabIndex={-1} />
    </main>
  );
}
