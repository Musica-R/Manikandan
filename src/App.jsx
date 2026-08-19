import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Filmography from "./pages/Filmography";
import Gallery from "./pages/Gallery";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import MobileArrow from "./pages/MobileArrow";
import FounderBadge from "./pages/FounderBadge";
import Lyrics from "./pages/Lyrics";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filmography" element={<Filmography />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <MobileArrow />
      <FounderBadge />
    </BrowserRouter>
  );
}
