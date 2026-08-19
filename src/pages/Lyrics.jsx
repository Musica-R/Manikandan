import React, { useEffect, useRef, useState } from "react";
import { FaPlay, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import { lyrics, muviaChannel, getYouTubeId } from "../data/content";
import "./Lyrics.css";

function LyricsRow({ song, index }) {
    const [playing, setPlaying] = useState(false);
    const rowRef = useRef(null);

    const videoId = getYouTubeId(song.youtube);
    const thumbSrc = song.thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const embedSrc = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;



    // Auto-stop and revert to thumbnail once scrolled out of view
    useEffect(() => {
        if (!playing) return;
        const el = rowRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) setPlaying(false);
            },
            { threshold: 0 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [playing]);

    return (
        <div className="lyricsRow" ref={rowRef}>
            <button
                type="button"
                className="lyricsRow__frameWrap"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${song.title}`}
            >
                {playing ? (
                    <iframe
                        className="lyricsRow__frame"
                        src={embedSrc}
                        title={song.title}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <>
                        <img
                            className="lyricsRow__thumb"
                            src={thumbSrc}
                            alt={song.title}
                            loading="lazy"
                        />
                        <span className="lyricsRow__playBtn">
                            <FaPlay size={16} />
                        </span>
                    </>
                )}
            </button>

            <div className="lyricsRow__info">
                <span className="lyricsRow__index">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="lyricsRow__title">{song.title}</h3>
                <p className="lyricsRow__tagline">{song.tagline}</p>
                <span className="lyricsRow__badge">Lyrics by Manikandan</span>
            </div>
        </div>
    );
}

export default function Lyrics() {
    return (
        <>
            <PageHero
                eyebrow="Lyrics"
                title="Words set to music"
                lede="Songs and short films written by Manikandan. Tap a thumbnail to play — it stops automatically once you scroll past it."
            />

            <section className="lyrics">
                <div className="contain lyrics__list">
                    {lyrics.map((song, i) => (
                        <LyricsRow key={song.youtube} song={song} index={i} />
                    ))}
                </div>
                <br /> <br />
                <div className="container">
                    <a
                        className="muviaCta"
                        href={muviaChannel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="muviaCta__icon">
                            <FaYoutube size={30} />
                        </span>
                        <span className="muviaCta__text">
                            <span className="muviaCta__name">{muviaChannel.name}</span>
                            <span className="muviaCta__desc">{muviaChannel.description}</span>
                        </span>
                        <span className="muviaCta__arrow">
                            <FaExternalLinkAlt size={15} />
                        </span>
                    </a>
                </div>
            </section>
        </>
    );
}