"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Header.module.scss";
import MobileNavigation from "./MobileNavigation";

const home = { href: "/#home", label: "דף הבית" };

const contact = { href: "/#contact", label: "צור קשר" };

const navigation = [
  home,
  { href: "/#about", label: "אודותינו" },
  { href: "/#services", label: "השירותים שלנו" },
  { href: "/#projects", label: "הפרויקטים שלנו" },
  contact,
];

function NavigationLinks({ active }: { active: string }) {
  return (
    <ul className={styles.links}>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <a href={href} aria-current={href === active ? "location" : undefined}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ContactLink() {
  return (
    <a className={styles.contact} href={contact.href}>
      דברו איתנו
    </a>
  );
}

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(home.href);

  useEffect(() => {
    const header = headerRef.current;
    const sections = Array.from(document.querySelectorAll<HTMLElement>("#home > section"));
    const footer = document.querySelector("footer");
    if (!header || !sections.length || !("IntersectionObserver" in window)) return;

    let observer: IntersectionObserver | undefined;

    function activationLine() {
      return Math.min((header?.offsetHeight ?? 0) + 24, window.innerHeight - 1);
    }

    function updateActive() {
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight - 2;
      const line = activationLine();
      const section = sections.findLast((item) => item.getBoundingClientRect().top <= line + 1);
      const href = section?.id ? `/#${section.id}` : home.href;
      setActive(atBottom ? contact.href : href);
    }

    function observeSections() {
      observer?.disconnect();
      const line = activationLine();
      observer = new IntersectionObserver(updateActive, {
        rootMargin: `-${line}px 0px -${window.innerHeight - line - 1}px 0px`,
      });
      sections.forEach((section) => observer?.observe(section));
      updateActive();
    }

    const bottomObserver = new IntersectionObserver(updateActive, { threshold: 1 });
    if (footer) bottomObserver.observe(footer);

    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      window.removeEventListener("resize", observeSections);
      observer?.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={styles.bar}>
        <a className={styles.brand} href={home.href}>
          פ.ע ניהול ואחזקות
        </a>
        <nav className={styles.desktopNav} aria-label="ניווט ראשי">
          <NavigationLinks active={active} />
        </nav>
        <div className={styles.desktopContact}>
          <ContactLink />
        </div>
        <MobileNavigation>
          <NavigationLinks active={active} />
          <ContactLink />
        </MobileNavigation>
      </div>
    </header>
  );
}
