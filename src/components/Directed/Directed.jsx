import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaVideo } from "react-icons/fa";
import { directed } from "../../data/content";
import penImg from "../../assets/images/pen2.png";
import "./Directed.css";

function WorkCard({ film, align }) {
  return (
    <div className={`flow-card flow-card--${align}`}>
      <div className="flow-card__poster">
        <img src={film.poster} alt={film.title} />
      </div>

      <h3 className="flow-card__title">{film.title}</h3>
      <p className="flow-card__tagline">{film.tagline}</p>

      <div className="flow-card__roles">
        {film.roles.map(({ label, icon: Icon }) => (
          <span className="flow-pill" key={label}>
            <Icon size={12} /> {label.toUpperCase()}
          </span>
        ))}
      </div>

      <a
        className="flow-card__cta"
        href={film.youtube}
        target="_blank"
        rel="noreferrer"
      >
        VIEW PROJECT <FaArrowRight size={13} />
      </a>
    </div>
  );
}

function Ribbon({ side, top, icon: Icon = FaVideo, children }) {
  return (
    <div className={`flow-ribbon flow-ribbon--${side}`} style={{ top }}>
      <Icon size={13} />
      <span>{children}</span>
    </div>
  );
}

export default function Directed() {
  const [filmA, filmB] = directed;
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flow-section${inView ? " in-view" : ""}`}
    >
      <div className="container flow-section__inner-head">
        <p className="eyebrow">Behind the lens</p>
        <h2 className="flow-section__title">Stories I've directed</h2>
      </div>

      <div className="container flow-section__inner">
        <WorkCard film={filmA} align="left" />

        <div className="flow-center">
          <div className="flow-center__pen-wrap">
            <img src={penImg} alt="" className="flow-center__pen" />
          </div>
        </div>

        <WorkCard film={filmB} align="right" />
      </div>
    </section>
  );
}