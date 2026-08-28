import React, { useEffect, useRef, useState } from "react";

import {
  PiPenNibBold,
  PiVideoCameraBold,
  PiMaskHappyBold,
  PiBriefcaseBold,
  PiStarBold,
  PiFilmStripBold,
  PiTrophyBold,
  PiCalendarBlankBold,
  PiFingerprintBold,
  PiHeartBold,
  PiTargetBold,
  PiPlayFill,
  PiArrowRight,
  PiQuotesFill,
  PiPhoneCallBold,
  PiSparkleBold,
  PiBookOpenTextBold,
} from "react-icons/pi";

import { GiLaurelCrown } from "react-icons/gi";
import { about, images, journey, aboutStats, values, recognitions } from "../data/content";
import "./About.css";
import indhu from "../assets/ima1/sub/35.JPG";
import mani from "../assets/ima1/sub/16.JPG";
import muviaLogo from "../assets/ima1/sub/muvia.jpg";
import bookImg from "../assets/pic/book.png";

const ICONS = {
  pen: PiPenNibBold,
  camera: PiVideoCameraBold,
  mask: PiMaskHappyBold,
  briefcase: PiBriefcaseBold,
  star: PiStarBold,
  reel: PiFilmStripBold,
  trophy: PiTrophyBold,
  calendar: PiCalendarBlankBold,
  fingerprint: PiFingerprintBold,
  heart: PiHeartBold,
  target: PiTargetBold,
};

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

function Icon({ name, ...rest }) {
  const Cmp = ICONS[name] || PiStarBold;
  return <Cmp {...rest} />;
}

/* ---------- Scroll reveal ---------- */

function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal${inView ? " reveal--in" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Content specific to this page ---------- */

const workExperience = {
  company: "Blue Dart Express Limited",
  position: "Shift Incharge",
  duration: "10 Years",
};

const wife = {
  name: "Indumathy Manikandan",
  image: indhu,
  bio:
    "Indumathy Manikandan is an Indian actress and producer known for her work in the Tamil entertainment industry (Kollywood), playing supporting roles in films and streaming series like Suzhal - The Vortex (2022), Kadaikutty Singam ( 2018 ), Kathar Basha Endra Muthuramalingam (2023) , Meiyazhagan (2024 ) and Dragon (2025).",
};

const muvia = {
  eyebrow: "Founder & CEO",
  brandLine1: "MUVIA",
  brandLine2: "PRODUCTIONS",
  tagline: "Turning Ideas Into Visual Reality",
  lede:
    "Transform your ideas into cinematic AI-powered videos with professional visuals, storytelling, editing, sound design, and motion graphics.",
  aboutTitle: "About Muvia Production",
  aboutParas: [
    "At Muvia Production, we turn ideas into powerful AI-driven visual experiences with cinematic quality, creative storytelling, and professional production.",
    "From social media content to brand advertisements and cinematic campaigns, we create high-quality videos that capture attention, connect with audiences, and elevate your brand.",
  ],
  motto: "Your vision. Our creativity. Powered by AI.",
  phone: "+91 98434 26772",
};

const STEP = 130; // ms between each staggered item

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="container about-hero__inner">
          <div className="about-hero__copy">
            <Reveal as="span" className="eyebrow" delay={0 * STEP}>
              About
            </Reveal>
            <Reveal as="h1" delay={1 * STEP}>
              The person behind the camera
            </Reveal>
            <Reveal as="p" className="about-hero__script" delay={2 * STEP}>
              Storyteller from Coimbatore
            </Reveal>
            <Reveal as="p" className="about-hero__roles" delay={3 * STEP}>
              Director · Screenwriter · Actor
            </Reveal>
            <Reveal as="p" className="about-hero__lede" delay={4 * STEP}>
              {about.intro}
            </Reveal>
            <Reveal className="about-hero__actions" delay={5 * STEP}>
              <a href="/contact" className="btn-solid">
                Let's Work Together <PiArrowRight />
              </a>
              <a href="#showreel" className="btn-ghost">
                <span className="btn-ghost__play">
                  <PiPlayFill />
                </span>
                Watch Showreel
              </a>
            </Reveal>
          </div>

          <Reveal className="about-hero__media" delay={3 * STEP}>
            <div className="about-hero__portrait">
              <img src={images.about} alt="Manikandan on set" />
              <blockquote className="about-hero__quote">
                <PiQuotesFill className="about-hero__quote-mark" />
                <p>{about.quote}</p>
                — Manikandan
              </blockquote>
            </div>
            <div className="about-hero__strip">
              {images.contactSheet.map((src, i) => (
                <img key={i} src={src} alt="" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* MUVIA PRODUCTIONS — CEO / COMPANY BAND */}
      <section className="muvia">

        <div className="container muvia__inner">
          <Reveal as="div" className="muvia__header">
            <span className="muvia__eyebrow">
              <PiSparkleBold /> {muvia.eyebrow}
            </span>
            <h2 className="muvia__brand">
              {muvia.brandLine1}
              <span className="muvia__brand-sub">{muvia.brandLine2}</span>
            </h2>
            <p className="muvia__tagline">{muvia.tagline}</p>
          </Reveal>

          <div className="muvia__grid">

            {/* Lede copy + big logo, stacked in normal flow underneath the text */}
            <div className="muvia__lede-col">
              <Reveal as="p" className="muvia__lede" delay={1 * STEP}>
                {muvia.lede}
              </Reveal>

              <Reveal as="div" className="muvia__logo-wrap" delay={1.5 * STEP}>
                <img className="muvia__logo" src={muviaLogo} alt="Muvia Production logo" />
              </Reveal>
            </div>

            <Reveal as="div" className="muvia__about" delay={2 * STEP}>
              <span className="muvia__about-icon">
                <PiFilmStripBold />
              </span>
              <h3>{muvia.aboutTitle}</h3>
              {muvia.aboutParas.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="muvia__motto">{muvia.motto}</p>
              <Reveal as="div" className="muvia__contact" delay={3 * STEP}>
                <span className="muvia__contact-label">Get in touch</span>
                <a href={`tel:${muvia.phone.replace(/\s+/g, "")}`} className="muvia__contact-link">
                  <PiPhoneCallBold />
                  {muvia.phone}
                </a>
              </Reveal>
            </Reveal>
          </div>


        </div>
      </section>

      {/* JOURNEY */}
      <section className="journey">
        <div className="container">
          <Reveal as="div" className="journey__heading">
            <span className="eyebrow eyebrow--light">My Journey</span>
            <h2>A decade of stories, on and off screen</h2>
          </Reveal>

          <div className="journey__timeline">
            {journey.map((item, i) => (
              <Reveal
                as="div"
                className="journey__item"
                key={item.title}
                delay={i * STEP}
              >
                <span className="journey__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {/* <span className="journey__year">{item.year}</span> */}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="stats">
            {aboutStats.map((s, i) => (
              <Reveal
                as="div"
                className="stats__item"
                key={s.label}
                delay={i * STEP}
              >
                <span className="stats__icon">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <strong>{s.value}</strong>
                  <p>{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND THE CAMERA / WHAT DRIVES MY STORIES */}
      <section className="split">
        <div className="container split__inner">
          {/* Work experience at the top, image left / content right */}
          <Reveal as="div" className="split__card split__card--dark split__card--work">
            <div className="split__work-media">
              <img src={mani} alt="Manikandan at Blue Dart Express" />
            </div>
            <div className="split__work-content">
              <div className="work-exp work-exp--top">
                <div className="work-exp__row">
                  <span className="work-exp__label">Company</span>
                  <span className="work-exp__value">{workExperience.company}</span>
                </div>
                <div className="work-exp__row">
                  <span className="work-exp__label">Position</span>
                  <span className="work-exp__value">{workExperience.position}</span>
                </div>
                <div className="work-exp__row">
                  <span className="work-exp__label">Experience</span>
                  <span className="work-exp__value">{workExperience.duration}</span>
                </div>
              </div>

              <span className="split__icon">
                <PiBriefcaseBold />
              </span>
              <h3>Beyond the Camera</h3>
              <p>{about.beyondTheCamera}</p>
            </div>
          </Reveal>

          <Reveal as="div" className="split__card split__card--light" delay={STEP}>
            <PiQuotesFill className="split__quote-mark" />
            <h3>What Drives My Stories</h3>
            <p>{about.drivenBy}</p>
            <div className="values">
              {values.map((v, i) => (
                <Reveal
                  as="div"
                  className="values__item"
                  key={v.title}
                  delay={i * STEP}
                >
                  <span className="values__icon">
                    <Icon name={v.icon} />
                  </span>
                  <strong >{v.title}</strong>
                  <p>{v.desc}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOBBIES & INTERESTS */}
      <section className="hobbies">
        <div className="container hobbies__inner">
          <Reveal as="div" className="hobbies__header">
            <span className="eyebrow">{hobbies.eyebrow}</span>
            <h2>{hobbies.title}</h2>
            <p className="hobbies__subtitle">{hobbies.subtitle}</p>
          </Reveal>

          <div className="hobbies__grid">
            <div className="hobbies__list">
              {hobbies.books.map((book, i) => (
                <Reveal
                  as="div"
                  className="hobbies__item"
                  key={book}
                  delay={i * STEP}
                >
                  <span className="hobbies__icon">
                    <PiBookOpenTextBold />
                  </span>
                  <p>{book}</p>
                </Reveal>
              ))}
            </div>

            <Reveal as="div" className="hobbies__media" delay={STEP}>
              <img src={bookImg} alt="Books that shaped my thinking" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* HIS WIFE */}
      <section className="wife">
        <div className="container">
          <Reveal as="div" className="wife__card">
            <div className="wife__media">
              <img src={wife.image} alt={wife.name} />
            </div>
            <div className="wife__content">
              <span className="eyebrow">His Wife</span>
              <h3>{wife.name}</h3>
              <p>{wife.bio}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RECOGNITIONS */}
      <section className="recognitions">
        <div className="container recognitions__inner">
          <Reveal as="span" className="eyebrow eyebrow--light">
            Recognitions
          </Reveal>
          <div className="recognitions__list">
            {recognitions.map((r, i) => (
              <Reveal
                as="div"
                className="recognitions__item"
                key={r.title}
                delay={i * STEP}
              >
                <GiLaurelCrown className="recognitions__laurel recognitions__laurel--left" />
                <div>
                  <strong>{r.title}</strong>
                  <p>{r.desc}</p>
                </div>
                <GiLaurelCrown className="recognitions__laurel recognitions__laurel--right" />
              </Reveal>
            ))}
          </div>
          <img className="recognitions__reel" src={images.beyond} alt="" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}