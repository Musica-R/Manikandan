import React from "react";
import { directorQuote } from "../../data/content";
import "./Quote.css";
import img from "../../assets/ima1/sub/11.JPG";

const hobbies = {
  eyebrow: "Hobbies & Interests",
  title: "Naan Virumbi Paditha Puthagangal",
  subtitle: "Books I love returning to",
  books: [
    "Puranangal",
    "Sri Math Bhagavatham",
    "Yoga Vasistam (Yoga Vasista)",
    "Tamil Vedham",
    "Maranathirku Pin Manithanin Nilai — Maraimalai Adigal",
  ],
};

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

        <div className="quote-section__hobbies">
          <div className="quote-section__hobbiesHead">
            <p className="quote-section__eyebrow">{hobbies.eyebrow}</p>
            <h3 className="quote-section__hobbiesTitle">{hobbies.title}</h3>
            <p className="quote-section__hobbiesSub">{hobbies.subtitle}</p>
          </div>
          <ol className="quote-section__books">
            {hobbies.books.map((book, i) => (
              <li className="quote-section__book" key={book}>
                <span className="quote-section__bookIndex">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="quote-section__bookName">{book}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}