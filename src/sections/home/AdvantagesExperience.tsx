"use client";

import { useId, useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent, type ReactNode } from "react";

import { benefits } from "./advantagesData";
import styles from "./AdvantagesSection.module.scss";

const hotspots = [
  { x: 29, y: 30, areaX: 36, areaY: 36 },
  { x: 74, y: 36, areaX: 68, areaY: 42 },
  { x: 70, y: 62, areaX: 63, areaY: 58 },
  { x: 25, y: 64, areaX: 34, areaY: 68 },
];
const number = (index: number) => String(index + 1).padStart(2, "0");
const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function AdvantagesExperience({ model, children }: { model: ReactNode; children: ReactNode }) {
  const interactive = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [active, setActive] = useState(0);
  const detailsId = useId();
  const benefit = benefits[active];

  function step(direction: number) {
    setActive((index) => (index + direction + benefits.length) % benefits.length);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (!(event.target instanceof HTMLButtonElement)) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      step(event.key === "ArrowLeft" ? 1 : -1);
    }
  }

  return (
    <div className={styles.scene} data-interactive={interactive} onKeyDown={onKeyDown}>
      <div className={styles.modelStage}>
        {model}
        {interactive && (
          <div className={styles.hotspots} role="group" aria-label="נקודות בחירה על הבניין">
            {hotspots.map(({x, y, areaX, areaY}, index) => (
              <span
                key={benefits[index].title}
                className={styles.marker}
                data-active={active === index}
                style={{ "--x": `${x}%`, "--y": `${y}%`, "--area-x": `${areaX}%`, "--area-y": `${areaY}%` } as CSSProperties}
              >
                <span className={styles.illumination} aria-hidden="true" />
                <svg className={styles.leader} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d={`M${x} ${y}L${areaX} ${areaY}`} vectorEffect="non-scaling-stroke" />
                </svg>
                <button
                  type="button"
                  className={styles.hotspot}
                  aria-label={`נקודה ${number(index)}: ${benefits[index].title}`}
                  aria-controls={detailsId}
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                >
                  <span>{number(index)}</span>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      {children}

      {interactive && (
        <div className={styles.mobileControls}>
          <div className={styles.selectors} role="group" aria-label="בחירת יתרון">
            {benefits.map(({ title, icon }, index) => (
              <button
                key={title}
                type="button"
                className={styles.icon}
                aria-label={title}
                aria-controls={detailsId}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={icon} /></svg>
              </button>
            ))}
          </div>

          <div id={detailsId} className={styles.details} aria-live="polite" aria-atomic="true">
            {benefits.filter((_, index) => index !== active).map(({ title, description }) => (
              <div key={title} className={styles.detailCopy} aria-hidden="true">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
            <div key={benefit.title} className={styles.detailCopy}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>

          <div className={styles.pager}>
            <button type="button" aria-label="היתרון הקודם" aria-controls={detailsId} onClick={() => step(-1)}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
            </button>
            <span dir="ltr" aria-label={`יתרון ${active + 1} מתוך ${benefits.length}`}>
              <strong>{number(active)}</strong> / {number(benefits.length - 1)}
            </span>
            <button type="button" aria-label="היתרון הבא" aria-controls={detailsId} onClick={() => step(1)}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
