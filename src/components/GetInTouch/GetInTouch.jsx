import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./GetInTouch.css";

export default function GetInTouch() {
  return (
    <section className="get-in-touch" id="contact">
      <div className="containers">
        <div className="get-in-touch__card">
          <p className="eyebrow">Let&apos;s work together</p>
          <h2 className="get-in-touch__title">Have a project or story in mind?</h2>
          <p className="get-in-touch__sub">
            Open to direction, screenwriting and acting collaborations.
          </p>
          <p className="get-in-touch__location">Based in Coimbatore, Tamil Nadu</p>
          <a href="/contact" className="get-in-touch__btn">
            Get in touch <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}