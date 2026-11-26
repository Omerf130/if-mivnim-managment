"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

import styles from "./ProjectsSection.module.scss";

const projects = [
  { id: "01", image: "/media/projects/terraces.webp", alt: "בניין מגורים מדורג עם מרפסות מוארות בשעת בין ערביים" },
  { id: "02", image: "/media/projects/tower.webp", alt: "מגדל מגורים מודרני עם מרפסות זכוכית מעוגלות" },
  { id: "03", image: "/media/projects/courtyard.webp", alt: "שביל מואר בין גינות ובנייני מגורים" },
  { id: "04", image: "/media/projects/boutique.webp", alt: "בניין דירות קטן עם חזית אבן ועצי זית" },
];

function Arrow({ forward = false }: { forward?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={forward ? styles.forward : undefined}>
      <path d="M4 12h15m-7-7 7 7-7 7" />
    </svg>
  );
}

export default function ProjectsGallery() {
  const [active, setActive] = useState(0);
  const featured = projects[active];
  const previews = projects.filter((project) => project.id !== featured.id);

  function step(direction: number) {
    setActive((index) => (index + direction + projects.length) % projects.length);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      step(event.key === "ArrowLeft" ? 1 : -1);
    }
  }

  return (
    <div className={styles.galleryLayout}>
      <div
        id="project-gallery"
        tabIndex={-1}
        className={styles.gallery}
        role="group"
        aria-label="גלריית פרויקטים להמחשה"
        aria-describedby="project-imagery-note"
        onKeyDown={onKeyDown}
      >
        <div className={styles.stage}>
          <figure className={styles.feature}>
            <div className={styles.featureMedia}>
              <Image
                key={featured.id}
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(min-width: 80rem) 42rem, (min-width: 64rem) 50vw, (min-width: 48rem) 65vw, calc(100vw - 2rem)"
                className={styles.featureImage}
              />
            </div>
            <figcaption className={styles.caption}>
              <span aria-live="polite" aria-atomic="true">פרויקט <bdi>{featured.id}</bdi></span>
              <div className={styles.arrows}>
                <button type="button" aria-label="הפרויקט הקודם" onClick={() => step(-1)}>
                  <Arrow />
                </button>
                <button type="button" aria-label="הפרויקט הבא" onClick={() => step(1)}>
                  <Arrow forward />
                </button>
              </div>
            </figcaption>
          </figure>

          <div className={styles.previews} role="group" aria-label="בחירת תמונת פרויקט">
            {previews.map((project, slot) => (
              <button
                key={slot}
                type="button"
                className={styles.preview}
                onClick={() => setActive(projects.indexOf(project))}
                aria-label={`הצגת פרויקט ${project.id}`}
              >
                <span className={styles.previewMedia}>
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(min-width: 80rem) 24rem, (min-width: 64rem) 28vw, (min-width: 48rem) 34vw, 30vw"
                  />
                </span>
                <span className={styles.previewTitle}>פרויקט <bdi>{project.id}</bdi></span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.progress}>
          <span dir="ltr" className={styles.count} aria-hidden="true">
            <strong>{featured.id}</strong> / {String(projects.length).padStart(2, "0")}
          </span>
          <div className={styles.segments} role="group" aria-label="מעבר לפרויקט לפי מספר">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                aria-current={active === index ? "true" : undefined}
                aria-label={`מעבר לפרויקט ${project.id}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>

      <a className={styles.cta} href="#project-gallery">
        לכל הפרויקטים
        <Arrow forward />
      </a>
    </div>
  );
}
