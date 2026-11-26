import styles from "./Footer.module.scss";

const links = [
  { href: "#home", label: "דף הבית" },
  { href: "#about", label: "אודותינו" },
  { href: "#services", label: "השירותים שלנו" },
  { href: "#projects", label: "הפרויקטים שלנו" },
  { href: "#contact", label: "צור קשר" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.layout}>
        <a className={styles.brand} href="#home">פ.ע ניהול ואחזקות</a>
        <nav aria-label="ניווט תחתון">
          <ul className={styles.links} role="list">
            {links.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
          </ul>
        </nav>
        <p className={styles.copyright}>© {new Date().getFullYear()} פ.ע ניהול ואחזקות. כל הזכויות שמורות.</p>
      </div>
    </footer>
  );
}
