import Image from "next/image";

import styles from "./Hero.module.scss";
import HeroVideo from "./HeroVideo";

export default function Hero({
  posterSrc = "/media/residential-exterior.webp",
  videoSrc,
}: {
  posterSrc?: string;
  videoSrc?: string;
}) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image
        className={styles.poster}
        src={posterSrc}
        alt=""
        fill
        preload
        unoptimized
      />
      {videoSrc && <HeroVideo src={videoSrc} />}
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.accent} aria-hidden="true" />
          <h1 id="hero-title" className={styles.title}>
            ניהול מבנים.{" "}
            <span>בסטנדרט אחר.</span>
          </h1>
          <p className={styles.description}>
            <span>ניהול מקצועי, תחזוקה מקיפה ושקט נפשי.</span>{" "}
            <span>כל מה שהבניין שלכם צריך, תחת קורת גג אחת.</span>
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">
              דברו איתנו
            </a>
            <a className={styles.secondary} href="#services">
              השירותים שלנו
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
