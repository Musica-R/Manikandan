import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFilm, FaBars, FaTimes } from "react-icons/fa";
import { navLinks, profile } from "../../data/content";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close the mobile menu on resize back to desktop
    const onResize = () => window.innerWidth > 860 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="nav nav--scrolled">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__brand-mark">
            <FaFilm size={14} />
          </span>
          <span className="nav__brand-text">
            {profile.shortMark}
            <span className="nav__brand-name">{profile.displayName}</span>
          </span>
        </NavLink>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav__link${isActive ? " nav__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>
    </header>
  );
}