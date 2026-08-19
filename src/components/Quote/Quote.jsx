import React from "react";
import { directorQuote } from "../../data/content";
import "./Quote.css";
import img from "../../assets/ima1/sub/11.JPG";

export default function Quote() {
  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-section__card">
          <div className="quote-section__content">
            <span className="quote-section__mark" aria-hidden="true">&ldquo;</span>
            <blockquote className="quote-section__text">
              {directorQuote.text}
            </blockquote>
            <cite className="quote-section__attr">— {directorQuote.attribution}</cite>
          </div>
          <div className="quote-section__media">
            <img src={img} alt={directorQuote.attribution} />
          </div>
        </div>
      </div>
    </section>
  );
}