import ProjectsGallery from "./ProjectsGallery";
import styles from "./ProjectsSection.module.scss";

export default function ProjectsSection() {
  return (
    <section id="projects" tabIndex={-1} aria-labelledby="projects-title" className={styles.section}>
      <div className={styles.layout}>
        <svg className={styles.blueprint} viewBox="0 0 1100 580" fill="none" aria-hidden="true">
          <path d="M16 309L240 93L446 208L718 106L921 305M58 344L240 157L446 263L718 141L889 321M240 93V310M291 125V315M446 208V408M718 106V435M496 257L683 186V301L496 373ZM795 413L977 319L1091 401V543L977 472L795 556ZM977 319V472M815 463L977 382L1091 458M815 508L977 427L1091 501" />
        </svg>

        <header className={styles.intro}>
          <p className={styles.eyebrow}>הפרויקטים שלנו</p>
          <h2 id="projects-title" className={styles.title}>
            מבנים שמדברים{" "}
            <span>בעד עצמם.</span>
          </h2>
          <p className={styles.lead}>
            כל מבנה הוא עולם בפני עצמו. הצצה לסביבת המגורים, לאדריכלות ולסטנדרט שאליו אנחנו שואפים.
          </p>
          <p id="project-imagery-note" className={styles.note}>הדמיות להמחשה בלבד</p>
        </header>

        <ProjectsGallery />
      </div>
    </section>
  );
}
