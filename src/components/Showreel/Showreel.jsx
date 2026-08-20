import React, { useRef, useState, useEffect } from "react";
import "./Showreel.css";
import clip1 from "../../assets/images/new.mp4";
import clip2 from "../../assets/images/new1.mp4";

const YOUTUBE_ID = "0MTT3a48aRE";

// Shared helper: fires onLeave when the element scrolls out of view
// (less than the given visibility threshold on screen).
function useOffscreenPause(elRef, onLeave, threshold = 0.4) {
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            onLeave();
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function LocalVideo({ src, label }) {
  const frameRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  // auto-pause when scrolled out of view
  useOffscreenPause(frameRef, () => {
    const v = videoRef.current;
    if (v && !v.paused) {
      v.pause();
      setPlaying(false);
    }
  });

  return (
    <div className="mkShowreel__frame" ref={frameRef} onClick={toggle}>
      <div className="mkShowreel__mat">
        <video
          ref={videoRef}
          src={src}
          playsInline
          loop
          muted
          preload="metadata"
        />
        <span className={`mkShowreel__playBtn ${playing ? "is-playing" : ""}`}>
          {playing ? (
            <svg viewBox="0 0 24 24" width="22" height="22">
              <rect x="6" y="5" width="4" height="14" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M7 5v14l12-7z" fill="currentColor" />
            </svg>
          )}
        </span>
        {label && <span className="mkShowreel__label">{label}</span>}
      </div>
    </div>
  );
}

function YouTubeVideo({ id, label }) {
  const frameRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // YouTube's iframe can't be paused via postMessage without the
  // Iframe API, so the simplest reliable "off" is unmounting it —
  // that stops playback and audio immediately.
  useOffscreenPause(frameRef, () => {
    setLoaded(false);
  });

  return (
    <div
      className="mkShowreel__frame"
      ref={frameRef}
      onClick={() => setLoaded(true)}
    >
      <div className="mkShowreel__mat">
        {loaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1`}
            title={label || "YouTube video"}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <>
            <img
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
              alt={label || "YouTube video thumbnail"}
              loading="lazy"
            />
            <span className="mkShowreel__playBtn">
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path d="M7 5v14l12-7z" fill="currentColor" />
              </svg>
            </span>
          </>
        )}
        {label && <span className="mkShowreel__label">{label}</span>}
      </div>
    </div>
  );
}

export default function Showreel() {
  return (
    <section className="mkShowreel" id="showreel">
      <div className="mkShowreel__container">
        <div className="mkShowreel__head">
          <p className="mkShowreel__eyebrow">Showreel</p>
          <h2 className="mkShowreel__title">Work in motion</h2>
          <p className="mkShowreel__sub">
            A short cut of scenes, edits, and moments from recent work.
          </p>
        </div>

        <div className="mkShowreel__grid">
          <div className="mkShowreel__item mkShowreel__item--main">
            <LocalVideo src={clip1} label="Selvaraj Ennum Naan " />
          </div>
          <div className="mkShowreel__item">
            <LocalVideo src={clip2} label="Reel 01" />
          </div>
          <div className="mkShowreel__item">
            <YouTubeVideo id={YOUTUBE_ID} label="Reel 02" />
          </div>
        </div>
      </div>
    </section>
  );
}