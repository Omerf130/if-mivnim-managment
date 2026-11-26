"use client";

import { useId, useRef, useState, type ReactNode } from "react";

import styles from "./Header.module.scss";

export default function MobileNavigation({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    toggleRef.current?.focus();
    setIsOpen(false);
  }

  return (
    <div
      className={styles.mobile}
      onKeyDown={(event) => {
        if (isOpen && event.key === "Escape") {
          event.preventDefault();
          closeMenu();
        }
      }}
    >
      <button
        ref={toggleRef}
        type="button"
        className={styles.toggle}
        aria-label={isOpen ? "סגירת תפריט הניווט" : "פתיחת תפריט הניווט"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      <nav
        id={panelId}
        className={styles.panel}
        data-open={isOpen}
        inert={!isOpen}
        aria-label="ניווט ראשי"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) {
            closeMenu();
          }
        }}
      >
        <div className={styles.panelContent}>{children}</div>
      </nav>
    </div>
  );
}
