import AboutSection from "@/sections/home/AboutSection";
import Hero from "@/sections/home/Hero";
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
      <div id="projects" tabIndex={-1} />
      <div id="contact" tabIndex={-1} />
    </main>
  );
}
