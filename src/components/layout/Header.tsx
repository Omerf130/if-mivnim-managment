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

function NavigationLinks() {
  return (
    <ul className={styles.links}>
      {navigation.map(({ href, label }) => (
        <li key={href}>
          <a href={href} aria-current={href === home.href ? "page" : undefined}>
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
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a className={styles.brand} href={home.href}>
          פ.ע ניהול ואחזקות
        </a>
        <nav className={styles.desktopNav} aria-label="ניווט ראשי">
          <NavigationLinks />
        </nav>
        <div className={styles.desktopContact}>
          <ContactLink />
        </div>
        <MobileNavigation>
          <NavigationLinks />
          <ContactLink />
        </MobileNavigation>
      </div>
    </header>
  );
}
