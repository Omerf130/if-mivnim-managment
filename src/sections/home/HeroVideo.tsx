"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./Hero.module.scss";

function playVideo(video: HTMLVideoElement, src: string) {
  if (!video.hasAttribute("src")) {
    video.src = src;
  }

  // A rejected autoplay request leaves the still visible and the button usable.
  void video.play().catch(() => {});
}

export default function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasFrame, setHasFrame] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection;

    const startAutoplay = () => {
      if (!video.hasAttribute("src") && !motion.matches && !connection?.saveData) {
        playVideo(video, src);
      }
    };

    const stopForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) video.pause();
    };

    if (document.readyState === "complete") {
      startAutoplay();
    } else {
      window.addEventListener("load", startAutoplay, { once: true });
    }
    motion.addEventListener("change", stopForReducedMotion);

    return () => {
      window.removeEventListener("load", startAutoplay);
      motion.removeEventListener("change", stopForReducedMotion);
    };
  }, [src]);

  function togglePlayback() {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (video.paused) {
      playVideo(video, src);
    } else {
      video.pause();
    }
  }

  const label = hasError
    ? "סרטון הרקע אינו זמין"
    : isPlaying
      ? "השהיית סרטון הרקע"
      : "הפעלת סרטון הרקע";

  return (
    <>
      <video
        ref={videoRef}
        className={styles.video}
        data-visible={hasFrame && !hasError}
        aria-hidden="true"
        tabIndex={-1}
        muted
        loop
        playsInline
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onPlaying={() => setHasFrame(true)}
        onError={() => {
          setHasError(true);
          setIsPlaying(false);
        }}
      />
      <button
        type="button"
        className={styles.playback}
        aria-label={label}
        aria-disabled={hasError || undefined}
        onClick={togglePlayback}
      >
        <span className={isPlaying ? styles.pauseIcon : styles.playIcon} aria-hidden="true" />
      </button>
    </>
  );
}
