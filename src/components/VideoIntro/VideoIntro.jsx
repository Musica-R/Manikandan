import React, { useRef, useState, useEffect } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import introVideo from "../../assets/images/3.mp4";
import "./VideoIntro.css";

export default function VideoIntro() {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section scrolls out of view, force-mute the video
        if (!entry.isIntersecting && !video.muted) {
          video.muted = true;
          setMuted(true);
        }
      },
      { threshold: 0.3 } // adjust: 0.3 = mute once 70% scrolled out of view
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="video-intro" ref={sectionRef}>
      <video
        ref={videoRef}
        className="video-intro__media"
        src={introVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-intro__overlay" />

      <div className="video-intro__content">
        <h1 className="video-intro__name">Manikandan</h1>
        <p className="video-intro__role">
          Director · Screenwriter · Actor · Lyricist
        </p>
      </div>

      <button
        className="video-intro__mute"
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <FaVolumeMute size={14} /> : <FaVolumeUp size={14} />}
      </button>

      <svg
        className="video-intro__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 70 C 300 20, 600 20, 900 65 C 1140 100, 1300 100, 1440 55 L1440 120 L0 120 Z"
          fill="var(--bg-cream)"
        />
      </svg>
    </section>
  );
}