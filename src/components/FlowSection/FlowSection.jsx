import React from "react";
import { GiClapperboard, GiDirectorChair, GiVideoCamera } from "react-icons/gi";
import { about } from "../../data/content";
import "./FlowSection.css";

const pillars = [
  {
    icon: <GiClapperboard size={30} />,
    title: "Crafting Stories",
    text: "Every frame is a thought. Every story is an emotion.",
  },
  {
    icon: <GiDirectorChair size={30} />,
    title: "Bringing Visions To Life",
    text: "From script to screen, imagination becomes reality.",
  },
  {
    icon: <GiVideoCamera size={30} />,
    title: "Passion For Cinema",
    text: "Not just a profession, it's a way of life.",
  },
];

export default function FlowSection() {
  return (
    <section className="flow">
      <div className="container flow__inner">
        <div className="flow__intro">
          <p className="eyebrow">Beyond the frame</p>
          <h2 className="flow__title">{about.intro}</h2>
        </div>

        <div className="flow__grid">
          {pillars.map((p) => (
            <div className="flow__card" key={p.title}>
              <div className="flow__card-icon">{p.icon}</div>
              <h3 className="flow__card-title">{p.title}</h3>
              <p className="flow__card-text">{p.text}</p>
            </div>
          ))}
        </div>

        <p className="flow__note">{about.beyondTheCamera}</p>
      </div>
        <br /><br />
      {/* wave back to cream, closing the flow */}
      {/* <svg
        className="flow__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 C 300 110, 600 110, 900 55 C 1140 15, 1300 15, 1440 45 L1440 0 L0 0 Z"
          fill="var(--bg-cream)"
        />
      </svg> */}
    </section>
  );
}
