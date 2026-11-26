import Hero from "@/sections/home/Hero";

export default function HomePage() {
  return (
    <main id="home" tabIndex={-1}>
      <Hero
        posterSrc="/media/hero-building-poster.webp"
        videoSrc="/media/hero-building.mp4"
      />
      <div id="about" tabIndex={-1} />
      <div id="services" tabIndex={-1} />
      <div id="projects" tabIndex={-1} />
      <div id="contact" tabIndex={-1} />
    </main>
  );
}
