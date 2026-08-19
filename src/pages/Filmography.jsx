import React, { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaYoutube,
  FaVideo,
  FaFilm,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import {
  directed,
  actedFeatureFilms,
  actedFeatureFilmsNote,
  webSeries,
  maayanKalam,
  muviaProductions,
  thediPadippom,
} from "../data/content";
import { getYoutubeThumb } from "../utils/youtu";
import "./Filmography.css";
import GetInTouch from "../components/GetInTouch/GetInTouch";

// Fall back to empty arrays so the page still renders (rows just won't
// show) if any of these aren't exported from data/content.js yet.
const safeDirected = directed || [];
const safeActedFeatureFilms = actedFeatureFilms || [];
const safeWebSeries = webSeries || [];
const safeMuviaProductions = muviaProductions || [];
const safeThediPadippom = thediPadippom || [];

// Channel links used for the "Watch on YouTube channel" button in each
// row header. Move these into data/content.js and export them from there
// if you'd rather keep every link in one place.
const MUVIA_CHANNEL = "https://youtube.com/@muviaproductions";
const THEDI_CHANNEL = "https://youtube.com/@thedipadippom";

/* ------------------------------------------------------------------ */
/*  Acted — Short Films — credit-only, no poster / no youtube link.    */
/*  Requested: just the three titles mentioned, nothing more.          */
/* ------------------------------------------------------------------ */
const shortFilmCredits = [
  { title: "Rajini", context: "Made for PSG College", award: "Award — Director Sudesh Krishna" },
  { title: "Thalaikavasam", context: "Short Film", award: "Award — Coimbatore Commissioner" },
  { title: "Uyir", context: "Short Film", award: null },
  { title: "Neechi", context: "Short Film", award: null },
];

/* ------------------------------------------------------------------ */
/*  useReveal — fires once when the element scrolls into view.         */
/* ------------------------------------------------------------------ */
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ------------------------------------------------------------------ */
/*  Row — grid shelf: label + optional channel button + a self-sizing  */
/*  grid of cards. No horizontal scroll and no fixed column count —    */
/*  cardMin sets the smallest a card is allowed to get, and the grid    */
/*  (auto-fill) fits as many of that size as the row has room for.      */
/*  That's what keeps cards from shrinking down on wide screens and     */
/*  keeps them at a readable "medium" size on phones too.               */
/* ------------------------------------------------------------------ */
function Row({
  title,
  icon: Icon,
  count,
  viewAllHref,
  viewAllLabel,
  channelHref,
  channelLabel = "Watch on YouTube",
  cardMin = 210,
  cardMinMobile = 150,
  children,
}) {
  const [ref, visible] = useReveal();

  return (
    <div className={`flix-row${visible ? " is-visible" : ""}`} ref={ref}>
      <div className="flix-row__head">
        <span className="flix-row__icon">{Icon && <Icon />}</span>
        <h2>{title}</h2>
        {count && <span className="flix-row__count">{count}</span>}

        {channelHref && (
          <a
            href={channelHref}
            target="_blank"
            rel="noreferrer"
            className="flix-row__channel"
          >
            <FaYoutube /> {channelLabel}
          </a>
        )}

        {viewAllHref && (
          <a href={viewAllHref} className="flix-row__viewall">
            {viewAllLabel || "View all"} <FaArrowRight />
          </a>
        )}
      </div>

      <div
        className="flix-row__grid"
        style={{
          "--card-min": `${cardMin}px`,
          "--card-min-mobile": `${cardMinMobile}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  VideoCard — youtube-thumbnail tile, shared by every channel row    */
/*  (Muvia Productions, Thedi Padippom, Web Series, Maayan episodes).  */
/* ------------------------------------------------------------------ */
function VideoCard({ title, subtitle, video, index }) {
  return (
    <a
      href={video}
      target="_blank"
      rel="noreferrer"
      className="flix-card flix-card--video"
      style={{ "--i": index }}
    >
      <div className="flix-card__thumb">
        <img src={getYoutubeThumb(video)} alt={title} loading="lazy" />
        <span className="flix-card__play">
          <FaPlay />
        </span>
        <div className="flix-card__gradient" />
        <div className="flix-card__overlay">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  DirectedCard — tile for shorts Indumathy directed. Image now comes  */
/*  straight from the YouTube thumbnail (via the video's `youtube` URL)  */
/*  instead of a local /assets poster — so there's no poster file to     */
/*  keep in sync, it just pulls whatever's live on the YouTube video.    */
/* ------------------------------------------------------------------ */
function DirectedCard({ title, type, tagline, youtube, index }) {
  const card = (
    <div className="flix-card flix-card--directed" style={{ "--i": index }}>
      <div className="flix-card__thumb">
        <img src={getYoutubeThumb(youtube)} alt={title} loading="lazy" />
        {youtube && (
          <span className="flix-card__play">
            <FaPlay />
          </span>
        )}
        <div className="flix-card__gradient" />
        <div className="flix-card__overlay">
          <h3>{title}</h3>
          {type && <span className="flix-card__badge">{type}</span>}
          {tagline && <p>{tagline}</p>}
        </div>
      </div>
    </div>
  );

  return youtube ? (
    <a href={youtube} target="_blank" rel="noreferrer" className="flix-card-link">
      {card}
    </a>
  ) : (
    card
  );
}

/* ------------------------------------------------------------------ */
/*  FeatureCard — tile for feature films acted in. Image now comes      */
/*  straight from the YouTube thumbnail (via the film's `youtube` URL)  */
/*  instead of a local /assets poster, same as DirectedCard.            */
/* ------------------------------------------------------------------ */
function FeatureCard({ title, role, youtube, index }) {
  const card = (
    <div className="flix-card flix-card--feature" style={{ "--i": index }}>
      <div className="flix-card__thumb">
        <img src={getYoutubeThumb(youtube)} alt={title} loading="lazy" />
        {youtube && (
          <span className="flix-card__play">
            <FaPlay />
          </span>
        )}
        <div className="flix-card__gradient" />
        <div className="flix-card__overlay">
          <h3>{title}</h3>
          {role && <p>{role}</p>}
        </div>
      </div>
    </div>
  );

  return youtube ? (
    <a href={youtube} target="_blank" rel="noreferrer" className="flix-card-link">
      {card}
    </a>
  ) : (
    card
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */
export default function Filmography() {
  return (
    <>
      <PageHero
        eyebrow="Filmography"
        title="Direction, screen and story"
        lede="A working record of short films directed, feature films acted in, and web series appearances."
      />

      {/* Muvia Productions — self-sizing grid, cards stay ~210px+ wide
          instead of shrinking as columns increase on wide screens. */}
      <section className="flix">
        <div className="con flix-rows">
          <Row
            title="Muvia Productions"
            icon={FaYoutube}
            count={`${safeMuviaProductions.length} videos`}
            channelHref={MUVIA_CHANNEL}
            cardMin={230}
            cardMinMobile={150}
          >
            {safeMuviaProductions.map((v, i) => (
              <VideoCard
                key={v.video}
                title={v.title}
                subtitle={v.subtitle}
                video={v.video}
                index={i}
              />
            ))}
          </Row>
        </div>
      </section>

      {/* Maayan-Kalam — plain shelf treatment, no backdrop image / scrim
          banner. Just a short text intro above the row. */}
      <section className="flix">
        <div className="con flix-rows">
          {/* <div className="flix-intro">
            <p className="flix-intro__eyebrow">Universe</p>
            <h2 className="flix-intro__title">{maayanKalam.title}</h2>
            <p className="flix-intro__tagline">{maayanKalam.tagline}</p>
            <p className="flix-intro__desc">{maayanKalam.description}</p>
          </div> */}

          <Row
            title="Maayan - Kalam"
            icon={FaYoutube}
            channelHref={maayanKalam.channel}
            channelLabel="Full channel"
            cardMin={230}
            cardMinMobile={150}
          >
            {maayanKalam.videos.map((url, i) => (
              <VideoCard
                key={url}
                title={`Part ${i + 1}`}
                subtitle="Dark Cinematic Sci-fi Universe"
                video={url}
                index={i}
              />
            ))}
          </Row>
        </div>
      </section>

      {/* Thedi Padippom — its own full-width row. */}
      <section className="flix">
        <div className="con flix-rows">
          <Row
            title="Thedi Padippom"
            icon={FaYoutube}
            count={`${safeThediPadippom.length} videos`}
            channelHref={THEDI_CHANNEL}
            cardMin={230}
            cardMinMobile={150}
          >
            {safeThediPadippom.map((v, i) => (
              <VideoCard
                key={v.video}
                title={v.title}
                subtitle={v.subtitle}
                video={v.video}
                index={i}
              />
            ))}
          </Row>
        </div>
      </section>

      {/* Directed + Web Series sit side by side in one row on
          desktop/tablet, and stack on phones. */}
      <section className="flix">
        <div className="con flix-rows">
          <div className="flix-rows--split">
            <Row
              title="Directed"
              icon={FaVideo}
              count={`${safeDirected.length} short films`}
              cardMin={190}
              cardMinMobile={150}
            >
              {safeDirected.map((f, i) => (
                <DirectedCard
                  key={f.title}
                  title={f.title}
                  // type={f.type}
                  // tagline={f.tagline}
                  youtube={f.youtube}
                  index={i}
                />
              ))}
            </Row>

            <Row
              title="Web Series"
              icon={FaYoutube}
              count={`${safeWebSeries.length} series`}
              cardMin={190}
              cardMinMobile={150}
            >
              {safeWebSeries.map((w, i) => (
                <VideoCard
                  key={w.title}
                  title={w.title}
                  subtitle={w.role}
                  video={w.video}
                  index={i}
                />
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* <section className="flix">
        <div className="con flix-rows">
          <Row
            title="Acted — Feature Films"
            icon={FaFilm}
            count={actedFeatureFilmsNote}
            viewAllHref="/filmography/feature-films"
            viewAllLabel="View all feature films"
            cardMin={220}
            cardMinMobile={160}
          >
            {safeActedFeatureFilms.map((f, i) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                role={f.role}
                youtube={f.youtube}
                index={i}
              />
            ))}
          </Row>
        </div>
      </section>  */}

      <section className="flix-credits">
        <div className="con">
          <div className="flix-credits__head">
            <FaAward />
            <h2>Acted — Short Films</h2>
          </div>
          <ul className="flix-credits__list">
            {shortFilmCredits.map((f) => (
              <li key={f.title}>
                <span className="flix-credits__title">{f.title}</span>
                {f.context && <span className="flix-credits__context">{f.context}</span>}
                {f.award && <span className="flix-credits__award">{f.award}</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GetInTouch />
    </>
  );
}