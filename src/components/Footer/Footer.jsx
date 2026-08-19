import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaBehance,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { GiClapperboard, GiDirectorChair, GiVideoCamera } from "react-icons/gi";
import { contact } from "../../data/content";
import "./Footer.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Filmography", href: "/filmography" },
  { label: "Gallery", href: "/gallery" },
  // { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Short Films", href: "/filmography" },
  // { label: "Films", href: "/filmography" },
  { label: "Web Series", href: "/filmography" },
  { label: "Behind The Scenes", href: "/gallery" },
  // { label: "Awards & Honours", href: "/awards" },
];

const features = [
  {
    icon: <GiClapperboard size={34} />,
    title: "Crafting Stories",
    text: "Every frame is a thought. Every story is an emotion.",
  },
  {
    icon: <GiDirectorChair size={34} />,
    title: "Bringing Visions To Life",
    text: "From script to screen, imagination becomes reality.",
  },
  {
    icon: <GiVideoCamera size={34} />,
    title: "Passion For Cinema",
    text: "Not just a profession, it's a way of life.",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Decorative film reel (top right) */}
      <svg
        className="footer__deco footer__deco--reel"
        viewBox="0 0 220 220"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="reelHole" cx="35%" cy="35%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.14)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </radialGradient>
        </defs>
        <circle cx="110" cy="110" r="104" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="5" />
        <circle cx="110" cy="110" r="32" fill="url(#reelHole)" stroke="rgba(255,255,255,0.16)" strokeWidth="4" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 110 + 60 * Math.cos(rad);
          const cy = 110 + 60 * Math.sin(rad);
          return (
            <circle
              key={angle}
              cx={cx}
              cy={cy}
              r="19"
              fill="url(#reelHole)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="3.5"
            />
          );
        })}
      </svg>

      {/* Decorative filmstrip curve (bottom right) */}
      <svg
        className="footer__deco footer__deco--strip"
        viewBox="0 0 520 130"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M -20 105 C 150 15, 360 15, 540 95"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="20"
        />
        {Array.from({ length: 16 }).map((_, i) => {
          const t = i / 15;
          const x = -20 + t * 560;
          const y = 105 - Math.sin(t * Math.PI) * 90 + t * 90 * 0.35;
          return (
            <rect key={i} x={x - 4} y={y - 4} width="8" height="8" rx="2" fill="var(--f-bg)" />
          );
        })}
      </svg>

      <div className="container footer__grid">
        {/* Brand column */}
        <div className="footer__brand">
          <span className="footer__mark">R.</span>
          <p className="footer__name">MANIKANDAN</p>
          <p className="footer__role">Director · Screenwriter · Actor</p>
          <p className="footer__desc">
            Stories move. Emotions connect. Cinema inspires. Based in
            Coimbatore, Tamil Nadu.
          </p>
          <span className="footer__rule" />
          <a href={contact.href || "/contact"} className="footer__cta">
            Get In Touch <FaArrowRight size={14} />
          </a>
        </div>

        {/* Navigation column */}
        <div className="footer__col">
          <h4 className="footer__heading">Navigation</h4>
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore column */}
        <div className="footer__col">
          <h4 className="footer__heading">Explore</h4>
          <ul className="footer__list">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Let's Connect column */}
        <div className="footer__col">
          <h4 className="footer__heading">Let's Connect</h4>
          <ul className="footer__contact">
            {/* <li>
              <FaEnvelope size={14} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li> */}
            <li>
              <FaPhoneAlt size={14} />
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </li>
            <li>
              <FaMapMarkerAlt size={14} />
              <span>{contact.location}</span>
            </li>
          </ul>

          <div className="footer__socials">
            <a href={contact.socials.instagram} aria-label="Instagram" className="footer__icon">
              <FaInstagram size={16} />
            </a>
            <a href={contact.socials.youtube} aria-label="YouTube" className="footer__icon">
              <FaYoutube size={16} />
            </a>
            {/* <a href={contact.socials.behance} aria-label="Behance" className="footer__icon">
              <FaBehance size={16} />
            </a>
            <a href={contact.socials.linkedin} aria-label="LinkedIn" className="footer__icon">
              <FaLinkedinIn size={16} />
            </a> */}
          </div>
        </div>

        {/* Stay Updated column */}
        <div className="footer__col">
          <h4 className="footer__heading">Stay Updated</h4>
          <p className="footer__newsletter-text">
            Subscribe to get the latest updates on new projects and releases.
          </p>
          <form className="footer__subscribe" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email address" required />
            <button type="submit" aria-label="Subscribe">
              <FaArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>

      {/* Feature strip */}
      <div className="container footer__features">
        {features.map((feature, i) => (
          <React.Fragment key={feature.title}>
            <div className="footer__feature">
              <div className="footer__feature-icon">{feature.icon}</div>
              <div>
                <p className="footer__feature-title">{feature.title}</p>
                <p className="footer__feature-text">{feature.text}</p>
              </div>
            </div>
            {i < features.length - 1 && <span className="footer__feature-divider" />}
          </React.Fragment>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__signature">
            <p className="footer__signature-name">Manikandan</p>
            <p className="footer__signature-tag">
              Telling meaningful stories
              <br />
              through cinema.
            </p>
          </div>

          <div className="footer__bottom-center">
            <p className="footer__copy">
              © {new Date().getFullYear()} Manikandan. All rights reserved.
            </p>

            <div className="footer-credit-container">
            <img src="/ass/mp.jpg" alt="Mpeoples Logo" />
            <a href="https://mpeoples.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}><p>Developed by Mpeoples </p></a>
          </div>

            {/* <span className="footer__legal-divider" />
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer__legal-divider" />
            <a href="/terms">Terms &amp; Conditions</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
