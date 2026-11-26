import Image from "next/image";

import styles from "./AboutSection.module.scss";

const aboutImage = "/media/about/sunlit-residence.webp";

export default function AboutSection() {
  return (
    <section id="about" tabIndex={-1} aria-labelledby="about-title" className={styles.section}>
      <div className={styles.layout}>
        <figure className={styles.figure}>
          <Image
            src={aboutImage}
            alt="הדמיה של בניין מגורים באור שמש, עם חזית אבן וגינה מטופחת"
            fill
            sizes="(min-width: 48rem) 62vw, 100vw"
            className={styles.image}
            data-reveal="photo"
          />
        </figure>
        <svg className={styles.seam} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="M88 0 59 100" vectorEffect="non-scaling-stroke" />
        </svg>
        <svg className={styles.plan} viewBox="0 0 540 360" fill="none" aria-hidden="true">
          <path d="M32 274V167L241 52 469 150V302M241 52v220M32 167l209 100 228-117M66 267V181l140-77v147m70 0V105l160 70v106M66 215l140-78M66 249l140-78m70-31 160 69m-160-31 160 69M118 152v100m45-127v109m162-107v127m59-101v127M10 306l223-58 291 86M80 329l182-49 247 65" />
        </svg>
        <span className={styles.arcs} aria-hidden="true" />
        <span className={styles.corner} aria-hidden="true" />

        <div className={styles.content} data-reveal="">
          <p className={styles.eyebrow}>אודותינו</p>
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

          <ul className={styles.values} aria-label="הערכים שלנו" role="list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 21h20M4 21V10h5m6 2h5v9M9 21V3h6v18M11.5 7h1m-1 4h1m-1 4h1M6 14h1m10 2h1" /></svg>
              מקצועיות
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2.5 20 6v5c0 5-3 8.25-8 10.5C7 19.25 4 16 4 11V6l8-3.5ZM8.5 12l2.3 2.3 4.7-4.7" /></svg>
              שקיפות
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM5 21v-2a7 7 0 0 1 14 0v2H5Zm12-17c2.5.5 3.5 3.5 2 5m1 4a5 5 0 0 1 3 5v1h-4M7 4C4.5 4.5 3.5 7.5 5 9m-1 4a5 5 0 0 0-3 5v1h4" /></svg>
              שירות אישי
            </li>
          </ul>

          <div className={styles.action}>
            <a className={styles.cta} href="#about-details">
              הכירו אותנו
              <span className={styles.ctaArrow} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
