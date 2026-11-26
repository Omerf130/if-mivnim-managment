import Image from "next/image";

import ServiceImagePreview from "./ServiceImagePreview";
import styles from "./ServicesSection.module.scss";

const services = [
  {
    title: "ניהול מבנים",
    description: "ניהול שוטף, תיאום ספקים ומתן מענה לצורכי הבניין.",
    image: "/media/services/management.webp",
    imageAlt: "משרד ניהול מודרני עם שולחן עץ ומחיצות זכוכית",
  },
  {
    title: "אחזקה ותחזוקה",
    description: "טיפול במערכות המבנה ותחזוקה שוטפת של השטחים המשותפים.",
    image: "/media/services/maintenance.webp",
    imageAlt: "חדר מכונות עם צנרת פלדה ומערכות בקרה",
  },
  {
    title: "שירותי ניקיון",
    description: "שמירה על סביבת מגורים נקייה, נעימה ומטופחת.",
    image: "/media/services/cleaning.webp",
    imageAlt: "מכונת שטיפה מקצועית בלובי מגורים",
  },
  {
    title: "גינון וטיפוח",
    description: "טיפוח השטחים הירוקים והסביבה החיצונית של המבנה.",
    image: "/media/services/gardening.webp",
    imageAlt: "שביל מואר העובר בין הצמחייה בחצר מגורים",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" tabIndex={-1} aria-labelledby="services-title" className={styles.section}>
      <Image
        src="/media/services/exterior.webp"
        alt=""
        fill
        sizes="100vw"
        className={styles.backdrop}
      />
      <div className={styles.layout}>
        <svg
          className={styles.blueprint}
          viewBox="0 0 520 310"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M32 281V117L254 22L478 127V288M254 22V269M32 117L254 218L478 127M65 265V132L221 65V194M287 195V69L443 142V266M65 181L221 114M65 230L221 163M287 117L443 190M287 164L443 238M111 113V245M163 90V226M340 93V224M393 118V251" />
          <path d="M8 297L254 197L511 299M105 295L254 235L408 299M254 0V310" />
        </svg>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>השירותים שלנו</p>
          <h2 id="services-title" className={styles.title}>
            כל מה שהבניין שלכם צריך.{" "}
            <span>במקום אחד.</span>
          </h2>
          <p className={styles.lead}>
            מעטפת שירותים מקיפה לניהול ואחזקת המבנה, עם תשומת לב לכל פרט.
          </p>
        </header>

        <ul className={styles.services} role="list">
          {services.map((service) => (
            <li key={service.title} className={styles.service}>
              <div className={styles.surface}>
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 80rem) 24rem, (min-width: 64rem) 30vw, (min-width: 36rem) 56vw, 100vw"
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.copy}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ServiceImagePreview
                src={service.image}
                alt={service.imageAlt}
                title={service.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
