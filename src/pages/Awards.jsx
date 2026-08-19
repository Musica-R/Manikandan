import React from "react";
import { GiTrophy } from "react-icons/gi";
import PageHero from "../components/PageHero/PageHero";
import { awards } from "../data/content";
import "./Awards.css";

export default function Awards() {
  return (
    <>
      <PageHero
        eyebrow="Awards & Honours"
        title="Recognition along the way"
        lede="A short but growing list — each one tied to a film made with people who cared about it as much as I did."
      />

      <section className="awards">
        <div className="container awards__list">
          {awards.map((a) => (
            <div className="awards__row" key={a.title}>
              <span className="awards__icon">
                <GiTrophy size={22} />
              </span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
