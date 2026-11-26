import HomeIntro from "@/sections/home/HomeIntro";

export default function HomePage() {
  return (
    <main id="home" tabIndex={-1}>
      <HomeIntro />
      <div id="about" tabIndex={-1} />
      <div id="services" tabIndex={-1} />
      <div id="projects" tabIndex={-1} />
      <div id="contact" tabIndex={-1} />
    </main>
  );
}
