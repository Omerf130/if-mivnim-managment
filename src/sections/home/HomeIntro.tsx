import styles from "./HomeIntro.module.scss";

export default function HomeIntro() {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>פ.ע ניהול ואחזקות</h1>
      <p className={styles.tagline}>ניהול מבנים. בסטנדרט אחר.</p>
    </div>
  );
}
