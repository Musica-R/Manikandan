import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaFilm, FaTv, FaTrophy, FaPlay, FaTimes, FaRegClock, FaUsers, FaStar, FaYoutube } from "react-icons/fa";
import { actedFeatureFilms, actedFeatureFilmsNote, webSeries } from "../../data/content";
import "./ActingCredits.css";

// ---------------------------------------------------------------------------
// Helpers for building a "poster" from a raw YouTube link — no manual poster
// images needed for these channel entries; the thumbnail is derived from the
// video id itself.
// ---------------------------------------------------------------------------
function ytId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/
  );
  return match ? match[1] : url;
}

function ytThumb(url) {
  return `https://img.youtube.com/vi/${ytId(url)}/hqdefault.jpg`;
}

function ytItem(url, title, context) {
  return {
    title,
    context,
    youtube: url,
    poster: ytThumb(url),
  };
}

// ---------------------------------------------------------------------------
// Muvia Productions — https://youtube.com/@muviaproductions
// ---------------------------------------------------------------------------
const muviaProductions = [
  ytItem(
    "https://youtu.be/u8pszrK68b0",
    "The Last Day",
    "Official Tamil Song · College Love Story"
  ),
  ytItem(
    "https://youtu.be/WyzrshRqXkI",
    "Nilave",
    "Romantic Album Song"
  ),
  ytItem(
    "https://youtu.be/5XcRX0hQ694",
    "Mounam Moli",
    "Heart-Touching Love Song"
  ),
  ytItem(
    "https://youtu.be/gTIg2F2MkZQ?si=31TjbL6knP0EZi-0",
    "Ival Than Mohini ",
    "Muvia Productions"
  ),
];

// ---------------------------------------------------------------------------
// MAAYAN - KALAM — dark cinematic mythological sci-fi universe
// https://youtube.com/@maayan-kalam
// ---------------------------------------------------------------------------
const maayanKalamVideos = [
  "https://youtu.be/8ZHLH_7Ci5g",
  "https://youtu.be/nPt1V7PmF38",
  "https://youtu.be/nHIDtcjHBCw",
  "https://youtu.be/cWN2jGHVc_c",
  // "https://youtu.be/Qd53LqL38Jc",
  // "https://youtu.be/b3j2DNm7Wb8",
  // "https://youtu.be/n7TzANqp9hc",
].map((url, i) =>
  ytItem(url, `MAAYAN - KALAM — Part ${i + 1}`, "Dark Cinematic Sci-fi Universe")
);

// ---------------------------------------------------------------------------
// Thedi Padippom — https://youtube.com/@thedipadippom
// ---------------------------------------------------------------------------
const thediPadippomVideos = [
  ytItem(
    "https://youtu.be/AQiwpMVw5Zw",
    "தமிழ் மாதங்கள் (Tamil Months)",
    "Tamil Nursery Kids Education"
  ),
  ytItem(
    "https://youtu.be/w2mFVYz8mgs",
    "ஆத்திசூடி (Aathichudi)",
    "Tamil Nursery Kids Education"
  ),
];

const groups = [
  {
    key: "muvia",
    label: "Muvia Productions",
    icon: <FaYoutube />,
    items: muviaProductions,
    sub: "context",
  },
  {
    key: "maayan",
    label: "Maayan - Kalam",
    icon: <FaYoutube />,
    items: maayanKalamVideos,
    sub: "context",
  },
  {
    key: "thedipadippom",
    label: "Thedi Padippom",
    icon: <FaYoutube />,
    items: thediPadippomVideos,
    sub: "context",
  },
  {
    key: "series",
    label: "Web Series",
    icon: <FaTv />,
    items: webSeries || [],
    sub: "role",
  },
  // {
  //   key: "features",
  //   label: "Feature Films",
  //   icon: <FaFilm />,
  //   items: actedFeatureFilms,
  //   sub: "role",
  //   note: actedFeatureFilmsNote,
  // },
];

// Edit these to match the real numbers — they aren't part of content.js
const STATS = [
  { icon: <FaFilm />, value: "10+", label: "Films" },
  { icon: <FaRegClock />, value: "10+", label: "Years" },
  { icon: <FaTrophy />, value: "2", label: "Awards" },
  { icon: <FaUsers />, value: "100K+", label: "Audience" },
];

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/
  );
  return match ? match[1] : url;
}

// Some data entries use `youtube`, others (e.g. webSeries) use `video`.
function getTrailerUrl(item) {
  return item?.youtube || item?.video || null;
}

export default function ActingCredits() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const visibleGroups = useMemo(() => groups.filter((g) => g.items.length > 0), []);
  const defaultGroupKey = visibleGroups[0]?.key || groups[0].key;

  const [activeGroupKey, setActiveGroupKey] = useState(defaultGroupKey);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const playbackObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsPlaying(false);
        }
      },
      { threshold: 0.15 }
    );

    playbackObserver.observe(node);
    return () => playbackObserver.disconnect();
  }, []);

  const activeGroup =
    visibleGroups.find((g) => g.key === activeGroupKey) || visibleGroups[0];

  const currentItems = (activeGroup?.items || []).map((item) => ({
    ...item,
    _group: activeGroup,
  }));

  const active = currentItems[activeIndex] || currentItems[0];
  const activeYouTubeId = getYouTubeId(getTrailerUrl(active));
  const lastIndex = currentItems.length - 1;

  const scrollStageIntoView = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 900 && stageRef.current) {
      stageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToIndex = (index) => {
    const clamped = Math.max(0, Math.min(lastIndex, index));
    setActiveIndex(clamped);
    setIsPlaying(false);
    scrollStageIntoView();
  };

  const goToGroup = (groupKey) => {
    if (groupKey === activeGroupKey) return;
    setActiveGroupKey(groupKey);
    setActiveIndex(0);
    setIsPlaying(false);
    scrollStageIntoView();
  };

  const handlePlay = () => {
    setIsPlaying(true);
    scrollStageIntoView();
  };

  const handleClose = () => setIsPlaying(false);

  return (
    <section
      className={`acting-credits${isVisible ? " is-visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container acting-credits__inner">
        <div className="acting-credits__head">
          <p className="eyebrow reveal-text" style={{ transitionDelay: "0.05s" }}>
            Explore my work
          </p>
          <h2 className="acting-credits__title reveal-text" style={{ transitionDelay: "0.15s" }}>
            Filmography
          </h2>
          <div className="acting-credits__divider reveal-text" style={{ transitionDelay: "0.2s" }}>
            <span className="acting-credits__divider-line" />
            <span className="acting-credits__divider-icon">
              <FaFilm />
            </span>
            <span className="acting-credits__divider-line" />
          </div>
          <p className="acting-credits__desc reveal-text" style={{ transitionDelay: "0.25s" }}>
            A diverse body of work across feature films, short films and web
            series that reflects the range of characters and stories I've
            been a part of.
          </p>
          <NavLink
            to="/filmography"
            className="acting-credits__link reveal-text"
            style={{ transitionDelay: "0.3s" }}
          >
            Explore full filmography <FaArrowRight />
          </NavLink>
        </div>

        <div className="acting-credits__layout">
          {/* LEFT — realistic phone mockup that becomes a widescreen TV frame while a trailer plays */}
          <div className="acting-credits__stage" ref={stageRef}>
            <div className={`phone-stage${isPlaying ? " is-landscape" : ""}`}>
              <div className="phone-frame">
                {!isPlaying && (
                  <>
                    <span className="phone-frame__camera" />
                    <span className="phone-frame__btn phone-frame__btn--power" />
                    <span className="phone-frame__btn phone-frame__btn--vol-up" />
                    <span className="phone-frame__btn phone-frame__btn--vol-down" />
                  </>
                )}

                <div className="phone-frame__screen">
                  {currentItems.map((item, index) => {
                    const trailerUrl = getTrailerUrl(item);
                    const showVideo = isPlaying && index === activeIndex && trailerUrl;
                    return (
                      <div
                        key={`${item._group?.key}-${item.title}`}
                        className={`phone-frame__slide${index === activeIndex ? " is-active" : ""
                          }`}
                      >
                        {showVideo ? (
                          <iframe
                            className="phone-frame__video"
                            src={`https://www.youtube.com/embed/${activeYouTubeId}?autoplay=1&rel=0&playsinline=1&mute=0`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            frameBorder="0"
                          />
                        ) : (
                          <img src={item.poster} alt={item.title} loading="lazy" />
                        )}
                      </div>
                    );
                  })}

                  <div className="phone-frame__vignette" />

                  {getTrailerUrl(active) && !isPlaying && (
                    <button
                      type="button"
                      className="phone-frame__play"
                      onClick={handlePlay}
                      aria-label={`Play ${active.title} trailer`}
                    >
                      <FaPlay />
                    </button>
                  )}

                  {isPlaying && (
                    <button
                      type="button"
                      className="phone-frame__close"
                      onClick={handleClose}
                      aria-label="Close video"
                    >
                      <FaTimes />
                    </button>
                  )}

                  {!isPlaying && (
                    <div className="phone-frame__caption">
                      <span className="phone-frame__caption-title">{active?.title}</span>
                      <span className="phone-frame__caption-genre">
                        {activeGroup?.label}
                      </span>
                      {getTrailerUrl(active) && (
                        <button
                          type="button"
                          className="phone-frame__watch-btn"
                          onClick={handlePlay}
                        >
                          <FaPlay /> Watch Trailer
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {!isPlaying && (
                  <>
                    <span className="phone-frame__port" />
                    <span className="phone-frame__speaker" />
                  </>
                )}
              </div>

              {isPlaying && (
                <div className="tv-stand" aria-hidden="true">
                  <span className="tv-stand__neck" />
                  <span className="tv-stand__base" />
                </div>
              )}
            </div>

            <div className="acting-credits__stats">
              {STATS.map((stat) => (
                <div className="acting-credits__stat" key={stat.label}>
                  <span className="acting-credits__stat-icon">{stat.icon}</span>
                  <span className="acting-credits__stat-value">{stat.value}</span>
                  <span className="acting-credits__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — category tabs + list */}
          <div className="acting-credits__sheet">
            <div className="credit-tabs" role="tablist">
              {visibleGroups.map((group) => (
                <button
                  key={group.key}
                  type="button"
                  role="tab"
                  aria-selected={activeGroupKey === group.key}
                  className={`credit-tabs__btn${activeGroupKey === group.key ? " is-active" : ""
                    }`}
                  onClick={() => goToGroup(group.key)}
                >
                  <span className="credit-tabs__icon">{group.icon}</span>
                  {group.label}
                </button>
              ))}
            </div>

            <div className="credit-list" key={activeGroupKey}>
              {currentItems.map((item, index) => {
                const isActive = index === activeIndex;
                const subValue = item._group?.sub ? item[item._group.sub] : null;
                const trailerUrl = getTrailerUrl(item);

                return (
                  <article
                    key={`${item._group?.key}-${item.title}`}
                    className={`credit-row${isActive ? " is-active" : ""}`}
                    style={{ "--i": index }}
                    onClick={() => goToIndex(index)}
                  >
                    {item.featured && (
                      <span className="credit-row__ribbon" aria-hidden="true">
                        <FaStar />
                      </span>
                    )}

                    <span className="credit-row__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="credit-row__thumb">
                      <img src={item.poster} alt={item.title} loading="lazy" />
                    </div>

                    <div className="credit-row__body">
                      <p className="credit-row__title">{item.title}</p>
                      <span className="credit-row__tag">{item._group?.label}</span>
                      {subValue && <p className="credit-row__sub">{subValue}</p>}
                      {item.award && (
                        <span className="credit-row__award">
                          <FaTrophy /> {item.award}
                        </span>
                      )}
                    </div>

                    {trailerUrl && (
                      <button
                        type="button"
                        className="credit-row__watch"
                        onClick={(e) => {
                          e.stopPropagation();
                          goToIndex(index);
                          handlePlay();
                        }}
                      >
                        <FaPlay /> Watch Trailer
                      </button>
                    )}
                  </article>
                );
              })}
            </div>

            {activeGroup?.note && (
              <div className="credit-list__note">
                <span className="credit-list__note-line" />
                <FaFilm />
                <p>{activeGroup.note}</p>
                <span className="credit-list__note-line" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}