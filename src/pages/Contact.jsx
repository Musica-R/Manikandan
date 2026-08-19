import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram, FaYoutube } from "react-icons/fa";
import PageHero from "../components/PageHero/PageHero";
import "./Contact.css";

// Contact content lives directly on the page — no external data file needed.
const contact = {
  phones: [
    { label: "Manikandan R", number: "+91 98434 26772", href: "+919843426772" }
  ],
  address: "57/1A, 1st floor Alagesan Road 2, 4th Layout, Ramalinga Nagar, Saibaba Colony - 641 011",
  mapUrl: "https://maps.app.goo.gl/tgUhu3VJBZM2Eb2s5?g_st=awb",
  socials: {
    instagram: "https://www.instagram.com/ramanmanikandan7272",
    youtube: "https://youtube.com/@muviaproductions",
  },
  // WhatsApp number for form submissions, digits only, country code first, no + or spaces
  whatsappNumber: "919843426772",
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `New enquiry from the website:%0A%0AName: ${encodeURIComponent(
      form.name
    )}%0AEmail: ${encodeURIComponent(form.email)}%0AMessage: ${encodeURIComponent(
      form.message
    )}`;

    const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${text}`;

    // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the message pre-filled.
    // The visitor still has to hit send on WhatsApp's side — browsers can't submit
    // WhatsApp messages silently without their own backend + WhatsApp Business API.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's tell a story together"
        lede="For collaborations, casting enquiries, or festival submissions."
      />

      <section className="contact">
        <div className="container contact__inner">
          <div className="contact__side">
            <ul className="contact__details">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <FaPhoneAlt size={16} />
                  <div className="contact__phone">
                    <span className="contact__phoneLabel">{p.label}</span>
                    <a href={`tel:${p.href}`}>{p.number}</a>
                  </div>
                </li>
              ))}
              <li>
                <FaMapMarkerAlt size={16} />
                <span>{contact.address}</span>
              </li>
            </ul>

            <ul className="contact__socials">
              <li>
                <a href={contact.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
              </li>
              <li>
                <a href={contact.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <FaYoutube size={18} />
                </a>
              </li>
            </ul>

            <a
              href={contact.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__mapCard"
            >
              <span className="contact__mapIcon">
                <FaMapMarkerAlt size={18} />
              </span>
              <span className="contact__mapText">
                <span className="contact__mapTitle">Find us on the map</span>
                <span className="contact__mapAddress">{contact.address}</span>
              </span>
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about the project"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="contact__submit">
              {sent ? "Opened WhatsApp — send from there" : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}