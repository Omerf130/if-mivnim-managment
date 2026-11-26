"use client";

import Image from "next/image";
import { useId, useRef } from "react";

import styles from "./ServicesSection.module.scss";

type Props = {
  src: string;
  alt: string;
  title: string;
};

export default function ServiceImagePreview({ src, alt, title }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const dialogId = useId();

  return (
    <>
      <button
        type="button"
        className={styles.previewButton}
        aria-label={`הצגת תמונה: ${title}`}
        aria-haspopup="dialog"
        aria-controls={dialogId}
        onClick={() => dialog.current?.showModal()}
      >
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M13 7L6 14M6 8V14H12" />
        </svg>
      </button>

      <dialog
        ref={dialog}
        id={dialogId}
        aria-labelledby={`${dialogId}-title`}
        className={styles.dialog}
      >
        <div className={styles.dialogHeader}>
          <h3 id={`${dialogId}-title`}>{title}</h3>
          <form method="dialog">
            <button type="submit" className={styles.closeButton}>
              סגירה
            </button>
          </form>
        </div>
        <div className={styles.dialogImage}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 50rem) 46rem, calc(100vw - 3rem)"
          />
        </div>
      </dialog>
    </>
  );
}
