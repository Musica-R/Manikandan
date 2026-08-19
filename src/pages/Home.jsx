import React, { useState } from "react";
import { FaCertificate, FaRegUser, FaFilm, FaRegCalendarAlt } from "react-icons/fa";
import { GiLaurelsTrophy, GiDirectorChair, GiTrophyCup, GiMedal, GiClapperboard } from "react-icons/gi";
import VideoIntro from "../components/VideoIntro/VideoIntro";
import Hero from "../components/Hero/Hero";
import FlowSection from "../components/FlowSection/FlowSection";
import Directed from "../components/Directed/Directed";
import Quote from "../components/Quote/Quote";
import ActingCredits from "../components/ActingCredits/ActingCredits";
import Gallery from "../components/Gallery/Gallery";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import "./Home.css";
import trophyMedal from "../assets/images/aw2.png";
import trophyStar from "../assets/images/aw1.png";
import medalImg from "../assets/ima1/sub/medal1.png";

const awards = [
  {
    title: "Thalai Kavasam",
    giver: "Coimbatore",
    role: "Commissioner",
    BadgeIcon: GiMedal,
    desc: "Awarded for outstanding contribution to short filmmaking.",
    year: "2022",
    tag: "Special Recognition",
    image: trophyStar,
  },
  {
    title: "Go Green",
    giver: "Go Green Project",
    role: "Lyricist",
    BadgeIcon: FaCertificate,
    desc: "Worked as a lyricist for the song featured in the Go Green project.",
    year: "2023",
    tag: "Contribution",
    image: trophyMedal,
  },
  {
    title: "Rajini",
    giver: "Sudesh Krishna",
    role: "Director",
    BadgeIcon: GiTrophyCup,
    desc: "Recognised for a short film made at PSG College.",
    year: "2023",
    tag: "Best Short Film",
    image: trophyStar,
  },
];

const stats = [
  { num: "3", label: "Awards & Honours", Icon: GiLaurelsTrophy },
  { num: "2", label: "Short Films Directed", Icon: GiClapperboard },
  { num: "10+", label: "Feature films acted in", Icon: FaFilm },
  { num: "10", label: "Years across film & industry", Icon: FaRegCalendarAlt },
];

export default function Home() {
  const [isFlipping, setIsFlipping] = useState(false);

  const handleMedalClick = () => {
    if (isFlipping) return; // ignore rapid re-clicks mid-animation
    setIsFlipping(true);
    setTimeout(() => setIsFlipping(false), 900); // matches animation duration
  };

  return (
    <>
      <VideoIntro />
      <Hero />
      <FlowSection />
      <Directed />

      <section className="home-awards">
        <div className="home-awards__glow" aria-hidden="true" />

        <div className="home-awards__inner">
          {/* Left — heading + medal, stacked together */}
          <div className="home-awards__left">
            <div className="home-awards__head">
              <p className="eyebrow">Recognition</p>
              <h2 className="home-awards__title">Awards &amp; Honours</h2>

              <div className="home-awards__divider" aria-hidden="true">
                <span className="home-awards__divider-line" />
                <span className="home-awards__divider-star">★</span>
                <span className="home-awards__divider-line" />
              </div>

              <p className="home-awards__subtitle">
                Recognition of creativity, storytelling and dedication to the
                art of filmmaking.
              </p>
            </div>

            <div
              className="home-awards__medal"
              onClick={handleMedalClick}
              role="button"
              tabIndex={0}
              aria-label="Flip medal"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleMedalClick();
              }}
            >
              <img
                src={medalImg}
                alt="Film camera award medal"
                className={`home-awards__medal-img${isFlipping ? " is-flipping" : ""}`}
              />
            </div>
          </div>

          {/* Right — timeline of cards */}
          <div className="home-awards__timeline">
            {awards.map((a, i) => (
              <div className="home-awards__row" key={a.title} style={{ "--i": i }}>
                <div className="home-awards__row-marker">
                  {/* <span className="home-awards__row-year">{a.year}</span> */}
                  <span className="home-awards__row-badge">
                    <a.BadgeIcon />
                  </span>
                </div>

                <article className="home-awards__card">
                  <span className="home-awards__card-ribbon" aria-hidden="true" />
                  <div className="home-awards__card-text">
                    <p className="home-awards__card-tag">{a.tag}</p>
                    <h3 className="home-awards__card-title">{a.title}</h3>
                    <p className="home-awards__card-desc">{a.desc}</p>
                    <span className="home-awards__card-giver">
                      <FaRegUser className="home-awards__card-giver-icon" aria-hidden="true" />
                      <span>
                        {a.giver.toUpperCase()}, {a.role.toUpperCase()}
                      </span>
                    </span>
                  </div>
                  <div className="home-awards__card-media">
                    <img src={a.image} alt="" />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="home-awards__stats">
          <div className="container home-awards__stats-inner">
            {stats.map((s) => (
              <div className="home-awards__stats-item" key={s.label}>
                <span className="home-awards__stats-icon">
                  <s.Icon />
                </span>
                <div>
                  <p className="home-awards__stats-num">{s.num}</p>
                  <p className="home-awards__stats-label">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ActingCredits />
      <Quote />
      <Gallery />
      <GetInTouch />
    </>
  );
}