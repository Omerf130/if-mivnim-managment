import Image from "next/image";

import { companyContact } from "@/config/companyContact";

import ContactForm from "./ContactForm";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
  const { phone, email, address, serviceArea } = companyContact;

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title" className={styles.section}>
      <Image src="/media/contact/residential-sunset.webp" alt="" fill sizes="100vw" className={styles.image} />
      <svg className={styles.lines} viewBox="0 0 840 540" fill="none" aria-hidden="true">
        <path d="M18 459C110 161 359 42 562 49c145 4 240 92 266 207M54 484C137 222 358 92 558 95c127 2 219 69 259 161" />
        <path d="M525 49h77m-39-17v34M127 340h40m-20-15v30" />
      </svg>

      <div className={styles.layout}>
        <header className={styles.intro} data-reveal="">
          <p className={styles.eyebrow}>יצירת קשר</p>
          <h2 id="contact-title" className={styles.title}>
            בואו נדבר על{" "}
            <span>הבניין <strong>שלכם</strong></span>
          </h2>
          <p className={styles.lead}>ניהול ואחזקה מקצועיים, יחס אישי ושקט נפשי לאורך כל הדרך.</p>
          {(phone || email || address || serviceArea) && (
            <address className={styles.contactInfo} aria-label="פרטי קשר">
              <ul>
                {phone && <li><a href={`tel:${phone.replace(/[^+\d]/g, "")}`}><bdi>{phone}</bdi></a></li>}
                {email && <li><a href={`mailto:${email}`}><bdi>{email}</bdi></a></li>}
                {address && <li>{address}</li>}
                {serviceArea && <li>{serviceArea}</li>}
              </ul>
            </address>
          )}
        </header>
        <ContactForm />
      </div>
    </section>
  );
}
