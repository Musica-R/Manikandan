import React, { useEffect, useRef, useState, useCallback } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import { galleryImages } from "../data/content";
import "./Gallery.css";

function GalleryGrid({ images, onOpen }) {
  const [visible, setVisible] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisible((prev) => (prev.includes(index) ? prev : [...prev, index]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    const els = itemRefs.current;
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="gallery__grid">
      {images.map((img, i) => (
        <figure
          className={`gallery__item ${visible.includes(i) ? "is-visible" : ""}`}
          key={img.alt + i}
          ref={(el) => (itemRefs.current[i] = el)}
          data-index={i}
          style={{ transitionDelay: `${(i % 8) * 70}ms` }}
        >
          <button
            type="button"
            className="gallery__frame"
            onClick={() => onOpen(i)}
            aria-label={`Open ${img.alt}`}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </button>
        </figure>
      ))}
    </div>
  );
}

function Lightbox({ images, index, onClose, onNav }) {
  const img = images[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [onClose, onNav]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  if (!img) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
        <FaTimes />
      </button>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Previous photo"
      >
        <FaChevronLeft />
      </button>

      <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        <img src={img.src} alt={img.alt} />
        <span className="lightbox__count">
          {index + 1} / {images.length}
        </span>
      </div>

      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Next photo"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleNav = (delta) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + delta + galleryImages.length) % galleryImages.length;
      return next;
    });
  };

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="On set and behind the scenes"
        lede="Moments from the shoot floor, the editing suite, and the screening room."
      />

      <section className="gallery">
        <div className="container">
          <GalleryGrid images={galleryImages} onOpen={setLightboxIndex} />
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={handleNav}
        />
      )}
    </>
  );
}