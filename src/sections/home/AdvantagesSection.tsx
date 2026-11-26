import Image from "next/image";

import { benefits } from "./advantagesData";
import AdvantagesExperience from "./AdvantagesExperience";
import styles from "./AdvantagesSection.module.scss";

export default function AdvantagesSection() {
  return (
    <section id="advantages" aria-labelledby="advantages-title" className={styles.section}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>היתרונות שלנו</p>
        <h2 id="advantages-title" className={styles.title}>למה לבחור <span>בנו</span></h2>
        <p className={styles.lead}>
          ניהול מקצועי, יחס אישי ותשומת לב לכל פרט – כדי שתוכלו ליהנות משקט נפשי.
        </p>
      </header>

      <AdvantagesExperience
        model={(
          <>
            <div className={styles.model} data-reveal="fade">
              <Image
                src="/media/advantages/residential-model.webp"
                alt="הדמיה אדריכלית של בניין מגורים מואר על גבי בסיס תצוגה עגול"
                fill
                sizes="(min-width: 80rem) 45rem, (min-width: 64rem) 58vw, (min-width: 48rem) 36rem, 100vw"
              />
            </div>

            <svg className={styles.drawing} viewBox="0 0 1200 460" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <g className={styles.rings}>
                <path d="M303 311a297 289 0 0 1 594 0M327 311a273 264 0 0 1 546 0" />
                <path d="M359 281a249 221 0 0 1 482 0" strokeDasharray="4 8" />
              </g>
              <g className={styles.blueprint}>
                <path d="M193 395 602 329l399 66-400 56-408-56Zm73 13 336-56 330 56M332 420l270-44 261 44M394 429l208-34 194 34M433 357l271 80m64-79-272 79M157 398h53m783 0h50M598 441v16M590 450h16" />
              </g>
            </svg>
          </>
        )}
      >
        <svg className={styles.connectors} data-reveal="fade" viewBox="0 0 1200 460" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {benefits.map(({ title, connector, point: [x, y] }, index) => (
            <g key={title} className={styles.connector} data-benefit={index + 1}>
              <path d={connector} />
              <circle className={styles.halo} cx={x} cy={y} r="9" />
              <circle className={styles.point} cx={x} cy={y} r="4.5" />
            </g>
          ))}
        </svg>

        <ul className={styles.benefits} role="list">
          {benefits.map(({ title, description, icon }, index) => (
            <li key={title} className={styles.benefit} data-benefit={index + 1} tabIndex={0}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none"><path d={icon} /></svg>
              </span>
              <div className={styles.copy}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </AdvantagesExperience>
    </section>
  );
}
