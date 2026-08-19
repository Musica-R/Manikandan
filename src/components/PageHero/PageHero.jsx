import React from "react";
import "./PageHero.css";

export default function PageHero({ eyebrow, title, lede }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
      </div>
      <svg
        className="page-hero__wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 50 C 360 5, 1080 95, 1440 40 L1440 90 L0 90 Z"
          fill="var(--bg-teal)"
        />
      </svg>
    </section>
  );
}
