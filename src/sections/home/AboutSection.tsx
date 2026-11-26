import Image from "next/image";

import styles from "./AboutSection.module.scss";

const aboutImage = "/media/residential-exterior.webp";

export default function AboutSection() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className={styles.section}>
      <div className={styles.layout}>
        <figure className={styles.figure}>
          <div className={styles.imageFrame}>
            <Image
              src={aboutImage}
              alt="הדמיה של בניין מגורים מודרני בשעת בין ערביים"
              fill
              sizes="(min-width: 80rem) 38rem, (min-width: 48rem) 52vw, calc(100vw - 3rem)"
              className={styles.image}
            />
          </div>
        </figure>

        <div className={styles.content}>
          <p className={styles.eyebrow}>קצת עלינו</p>
          <h2 id="about-title" className={styles.title}>
            הבניין שלכם.{" "}
            <span>האחריות שלנו.</span>
          </h2>

          <div id="about-details" tabIndex={-1} className={styles.description}>
            <p>
              פ.ע ניהול ואחזקות מעניקה מעטפת שירותים לניהול ואחזקת מבנים, מתוך הבנה שלכל בניין יש צרכים ייחודיים.
            </p>
            <p>
              אנחנו מאמינים בניהול מקצועי, בשירות אישי ובתחזוקה איכותית, כדי להעניק לדיירים ולוועדי הבתים שקט נפשי.
            </p>
          </div>

          <a className={styles.cta} href="#about-details">
            <span>הכירו אותנו</span>
          </a>
        </div>
      </div>
    </section>
  );
}
