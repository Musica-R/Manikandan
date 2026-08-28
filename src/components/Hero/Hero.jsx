import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { profile, stats, images } from "../../data/content";
import "./Hero.css";
import imagedir from "../../assets/images/dir1.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{profile.kicker}</p>
          <h1 className="hero__title">
            Frame by frame,
            <br />
            <span className="hero__title-accent">a story worth telling.</span>
          </h1>
          <p className="hero__lede">{profile.tagline}</p>

          <div className="hero__actions">
            <NavLink to="/filmography" className="hero__cta hero__cta--solid">
              View Filmography <FaArrowRight size={13} />
            </NavLink>
            <NavLink to="/gallery" className="hero__cta hero__cta--outline">
              {/* <span className="hero__play">
                <FaPlay size={10} />
              </span> */}
              Watch Showreel
            </NavLink>
          </div>

          <dl className="hero__stats">
            {stats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <dt>{s.value}</dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-frame">
            <img src={imagedir} alt="Portrait of Manikandan" />
          </div>
          <span className="hero__portrait-ring" aria-hidden="true" />
        </div>
      </div>

      {/* Filmstrip wave — carries the reel motif from the footer up into
          the hero, and forms the seam into the teal section below. */}
      <svg
        className="hero__wave"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 80 C 240 20, 480 20, 720 70 C 960 120, 1200 120, 1440 60 L1440 140 L0 140 Z"
          fill="var(--bg-teal)"
        />
        {Array.from({ length: 26 }).map((_, i) => {
          const t = i / 25;
          const x = t * 1440;
          const y =
            80 -
            Math.sin(t * Math.PI * 1.15) * 55 -
            Math.sin(t * Math.PI * 0.4) * 8;
          return (
            <rect
              key={i}
              x={x - 4}
              y={y - 4}
              width="8"
              height="8"
              rx="2"
              className="hero__wave-sprocket"
            />
          );
        })}
      </svg>
    </section>
  );
}
