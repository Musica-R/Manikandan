
import pro1 from "../assets/ima1/sub/1.JPG"
import about1 from "../assets/images/dirc3.png"
import about2 from "../assets/ima1/sub/3.JPG"
import about3 from "../assets/ima1/sub/4.JPG"
import ab1 from "../assets/ima1/sub/5.JPG"
import ab2 from "../assets/ima1/sub/6.JPG"
import ab3 from "../assets/ima1/sub/7.JPG"
import ab4 from "../assets/ima1/sub/8.JPG"
import ab5 from "../assets/ima1/sub/9.JPG"
import ab6 from "../assets/ima1/sub/10.JPG"
import ab7 from "../assets/ima1/sub/11.JPG"
import ab8 from "../assets/ima1/sub/12.JPG"
import ab9 from "../assets/ima1/sub/23.JPG"

import new1 from "../assets/ima1/sub/act2.jpeg"
import new2 from "../assets/ima1/sub/2.JPG"
import new3 from "../assets/images/ch1.png"
import new4 from "../assets/images/ch2.png"
import new5 from "../assets/ima1/sub/18.JPG"
import new6 from "../assets/ima1/sub/19.JPG"
import new7 from "../assets/images/ch3.png"
import new8 from "../assets/images/pic7.jpeg"
import new9 from "../assets/ima1/sub/ab.jpeg"
import new10 from "../assets/ima1/sub/act1.jpeg"
import new11 from "../assets/images/1.jpeg"
import new12 from "../assets/images/2.jpeg"
import new13 from "../assets/images/3.jpeg"
import new14 from "../assets/images/profile1.jpeg"

import new15 from "../assets/images/new1.jpeg"
import new16 from "../assets/images/neww.jpeg"
import new17 from "../assets/ima1/sub/29.JPG"
import new18 from "../assets/images/new3.jpeg"


import beyo from "../assets/pic/2.jpg"


import act1 from "../assets/images/movie1.jpg"
import act2 from "../assets/images/ach.jpg"
import act3 from "../assets/images/img3.jpg"
import act4 from "../assets/images/movie2.jpg"

import lock from "../assets/images/movie3.jpg"


import feelayitaplaaPoster from "../assets/images/feel.png";
import uravodathanPoster from "../assets/images/di1.png";

import goGreenThumb from "../assets/images/go.png";
import feelThumb from "../assets/images/feel.png";        // you already import this as feelayitaplaaPoster
import uravoThumb from "../assets/images/di1.png";         // you already import this as uravodathanPoster


import { FaVideo, FaPen, FaFileAlt, FaMusic, FaBookOpen } from "react-icons/fa";

export const profile = {
  fullName: "Raman Manikandan",
  displayName: "Manikandan",
  shortMark: "R.",
  tagline: "Director · Screenwriter · Actor · Lyricist",
  kicker: "Storyteller from Coimbatore",
};

// Used on the HOME page

export const stats = [
  { value: "2", label: "Short Films Directed" },
  { value: "10+", label: "Feature films acted in" },
  { value: "2", label: "Awards & honours" },
  { value: "10", label: "Years across film & industry" },
];

export const about = {
  intro:
    "Manikandan writes, directs and acts across short films and web series, with a career built on storytelling in every form — lyrics, screenplay, script and direction.",
  beyondTheCamera:
    "Alongside his film work, Manikandan has spent 10 years at Blue Dart Express Ltd as Shift Incharge, and has led the consolidation and franchising of Blue Dart operations across Coimbatore and Tirupur.",
  quote:
    "Cinema is not just my profession, it's my way of expressing life.",
  drivenBy:
    "I believe every story has the power to connect, inspire and leave a lasting impact. My films are born from real emotions, human relationships and the world around me.",
};

export const directed = [
  {
    title: "Feelayitaplaa", // CONFIRM spelling
    type: "Short Film",
    tagline: "A journey of emotions and storytelling that touches the soul.",
    poster: feelayitaplaaPoster,
    youtube: "https://youtu.be/Sxmq3sHdrq4?si=Q3gVCkXE_nhe3PwH",
    roles: [
      { label: "Direction", icon: FaVideo },
      { label: "Screenplay", icon: FaPen },
      { label: "Script", icon: FaFileAlt },
      { label: "Lyrics", icon: FaMusic },
      { label: "Story", icon: FaBookOpen },
    ],
  },
  {
    title: "Uravodathan Uravaduven", // CONFIRM spelling
    type: "Short Film",
    tagline: "A tale of bonds that never fade, even in the darkest times.",
    poster: uravodathanPoster,
    youtube: "https://youtu.be/VkwdBELUllE",
    roles: [
      { label: "Direction", icon: FaVideo },
      { label: "Screenplay", icon: FaPen },
      { label: "Script", icon: FaFileAlt },
      { label: "Lyrics", icon: FaMusic },
      { label: "Story", icon: FaBookOpen },
    ],
  },
];

export const actedFeatureFilms = [
  {
    title: "Pongiyelu Manoharaa",
    role: "Doctor",
    poster: act1,
    youtube: "https://youtu.be/jc7jhGr63k4?si=tq0lmqFbwRVfAZR1",
  },
  {
    title: "Vetrivel",
    role: "Cast",
    poster: act3,
    youtube: "https://youtu.be/aN-FM64gDuk?si=0jASX_H4z0bEd0NQ",
  },
  {
    title: "Vennila Kabaddi Kuzhu",
    role: "Cast",
    poster: act4,
    youtube: "https://youtu.be/CTvzxyhokUM?si=pIEf09__P8v8xt38",
  },
  {
    title: "Achamillai Achamillai",
    role: "Cast",
    poster: act2,
    youtube: "https://youtu.be/ctgKlDYIxbI?si=-r7L261PM1_G_YyE",
  },
];

export const actedFeatureFilmsNote =
  "Alongside these, Manikandan has appeared in more than 10 feature films.";

// Image only — no video links for short films acted in.
export const actedShortFilms = [
  {
    title: "Rajini",
    context: "Made for PSG College",
    award: "Award — Director Sudesh Krishna",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=700&q=80&auto=format&fit=crop",
    youtube: "https://youtu.be/ctgKlDYIxbI?si=-r7L261PM1_G_YyE",
  },
  {
    title: "Thalai Kavasam",
    context: "Short Film",
    award: "Award — Coimbatore Commissioner",
    poster:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=700&q=80&auto=format&fit=crop",
    youtube: "https://youtu.be/ctgKlDYIxbI?si=-r7L261PM1_G_YyE",
  },
  {
    title: "Uyir Neetchi",
    context: "Short Film",
    award: null,
    poster:
      "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=700&q=80&auto=format&fit=crop",
    youtube: "https://youtu.be/ctgKlDYIxbI?si=-r7L261PM1_G_YyE",
  },
];


/* =====================================================================
   ADD TO data/content.js
   Paste the helper + the two exports below alongside your existing
   `directed`, `webSeries`, `maayanKalam`, etc. exports, then add
   `muviaProductions` and `thediPadippom` to the Filmography.jsx import.
   ===================================================================== */

const ytItem = (video, title, subtitle) => ({ video, title, subtitle });

// ---------------------------------------------------------------------------
// Muvia Productions — https://youtube.com/@muviaproductions
// Includes the 4 originally-listed tracks plus the 4 extra links you pasted
// (Dream Walk, Kadhal Kadhal, Pongal, and the new short release).
// ---------------------------------------------------------------------------
export const muviaProductions = [
  ytItem(
    "https://youtu.be/u8pszrK68b0",
    "The Last Day",
    "Official Tamil Song · College Love Story"
  ),
  ytItem("https://youtu.be/WyzrshRqXkI", "Nilave", "Romantic Album Song"),
  ytItem("https://youtu.be/5XcRX0hQ694", "Mounam Moli", "Heart-Touching Love Song"),
  ytItem(
    "https://www.youtube.com/watch?v=vb7HaT3XCSA",
    "The Serene Beauty of Nilave",
    "Muvia Productions"
  ),
  ytItem(
    "https://youtu.be/29PXGOUrsG8",
    "Dream Walk",
    "English Feel-Good Song"
  ),
  // NOTE: you pasted two different links for this track
  // (https://youtu.be/LjjYkctgYU4 and https://youtu.be/iSLz06jTE-A) —
  // using the second one since its title/timestamp matched. Swap if wrong.
  ytItem(
    "https://youtu.be/iSLz06jTE-A",
    "Kadhal Kadhal",
    "True Love Never Ends · Tamil Melody"
  ),
  ytItem(
    "https://youtu.be/cPHjqpF6ZRs",
    "பொங்கலோ பொங்கல்",
    "Festival Vibes · Tamil Album Song"
  ),
  ytItem(
    "https://youtu.be/OxJJy17Joew",
    "New Release",
    "Short release — out today"
  ),


  ytItem(
    "https://youtu.be/pFXtVkdt7OI?si=WRvjOgqdyMb_R66F",
    "Puththandu Vaazththukkal",
    "Tamil New Year Special"
  ),
  ytItem(
    "https://youtu.be/c0edSeC8D0k?si=-5OtcLkmi4cvEHbW",
    "Elam Maye",
    "New Tamil Album Song"
  ),

  ytItem(
    "https://youtu.be/p5UDKQylrPw?si=U8PiPa9c4JQXpvbq",
    "Ohm Ohm",
    "A Spiritual Tribute to Prabancha matha"
  ),
  ytItem(
    "https://youtu.be/euZr7lpK5dk?si=HwA8v6-SigfQHMVA",
    "Marudhachala",
    "Tamil Devotional Songs "
  ),

];

// ---------------------------------------------------------------------------
// Thedi Padippom — https://youtube.com/@thedipadippom
// ---------------------------------------------------------------------------
export const thediPadippom = [
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

  ytItem(
    "https://youtube.com/shorts/pkbhCE6LN44?si=PDWz509jq3wtwZBa",
    "Kids learning ",
    "Daily healthy tips"
  ),
  ytItem(
    "https://youtube.com/shorts/p2H3oP73C1U?si=b3PPgEAWU1ZHjcH6",
    "Kids learning ",
    "Daily healthy tips"
  ),
];

export const webSeries = [
  {
    title: "Lockdown Kadhal",
    role: "Actor",
    video: "https://youtu.be/ctgKlDYIxbI?si=-r7L261PM1_G_YyE",
    poster: lock,
  },
];


export const maayanKalam = {
  title: "MAAYAN - KALAM",
  tagline: "A dark cinematic mythological sci-fi universe",
  description:
    "Forgotten legends recreated through forbidden science. Enter a hidden island filled with hybrid creatures, ancient gods, bio-engineered monsters, underwater kingdoms, and terrifying experiments led by a genius doctor who refused to accept extinction.",
  channel: "https://youtube.com/@maayan-kalam?si=iEhOFamSsbiOuBe6",
  videos: [
    "https://youtu.be/8ZHLH_7Ci5g?si=lHU5sL-bdmO4nTbS",
    "https://youtu.be/nPt1V7PmF38?si=DSGPnma8qFD0e122",
    "https://youtu.be/nHIDtcjHBCw?si=vz05_gVZ06Bupegu",
    "https://youtu.be/cWN2jGHVc_c?si=aQCkUakABqHxb2WB",
    "https://youtu.be/Qd53LqL38Jc?si=z3MZhccIrRPmTMnT",
    "https://youtu.be/b3j2DNm7Wb8?si=fg9CTAQHI8AC5QhA",
    "https://youtu.be/n7TzANqp9hc?si=hpHpG_rjWCZiAwHX",
  ],
};

export const directorQuote = {
  text: "Cinema is not just my profession, it's my way of expressing life.",
  attribution: "Manikandan",
};

export const awards = [
  {
    title: "Thalaikavasam",
    detail: "Awarded by the Coimbatore Commissioner.",
  },
  {
    title: "Go Green",
    detail:
      "Worked as a lyricist for the song featured in the Go Green project.",
  },
  {
    title: "Rajini",
    detail:
      "Recognised with an award from director Sudesh Krishna for a short film made at PSG College.",
  },
];

export const contact = {
  href: "/contact",
  email: "hello@manikandan.film", // CONFIRM — placeholder
  phone: "+91 98434 26772", // CONFIRM — sourced from courier letterhead, verify before publishing
  phoneHref: "+919843426772",
  location: "57/1A, 1st floor Alagesan Road 2, 4th Layout, Ramalinga Nagar, Saibaba Colony - 641 011",
  socials: {
    instagram: "https://www.instagram.com/ramanmanikandan7272",
    youtube: "https://youtube.com/@muviaproductions",
    behance: "#",
    linkedin: "#",
    imdb: "#",
  },
};

export const navLinks = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "filmography", label: "Filmography", path: "/filmography" },
  { id: "gallery", label: "Gallery", path: "/gallery" },
  // { id: "awards", label: "Awards", path: "/awards" },
  { id: "lyrics", label: "Lyrics", path: "/lyrics" },
  { id: "contact", label: "Contact", path: "/contact" },
];


export const journey = [
  { year: "2008", title: "Early Passion", desc: "Fell in love with films and storytelling.", icon: "clapper" },
  { year: "2010", title: "Writer at Heart", desc: "Began writing lyrics, scripts and stories.", icon: "pen" },
  { year: "2015", title: "Direction Debut", desc: "Stepped into direction with impactful short films.", icon: "camera" },
  { year: "2016+", title: "On Screen", desc: "Acted in more than 10 feature films.", icon: "mask" },
  { year: "2014–Present", title: "Industry Leadership", desc: "10 years as Shift Incharge at Blue Dart Express Ltd.", icon: "briefcase" },
  { year: "2024+", title: "Today & Beyond", desc: "Continuing to create stories that inspire and connect.", icon: "star" },
];

// Used on the ABOUT page (renamed from `statss`)
export const aboutStats = [
  { value: "2", label: "Short Films Directed", icon: "clapper" },
  { value: "10+", label: "Feature films acted in", icon: "reel" },
  { value: "2", label: "Awards & honours", icon: "trophy" },
  { value: "10", label: "Years across film & industry", icon: "calendar" },
];

export const values = [
  { title: "Authenticity", desc: "Real emotions, real stories", icon: "fingerprint" },
  { title: "Empathy", desc: "Stories that connect hearts", icon: "heart" },
  { title: "Craft", desc: "Committed to quality storytelling", icon: "film" },
  { title: "Impact", desc: "Cinema that leaves a lasting mark", icon: "target" },
];

export const recognitions = [
  { title: "Rajini", desc: "Award from Director Sudesh Krishna (PSG College)" },
  { title: "Thalai Kavasam", desc: "Awarded by the Coimbatore Commissioner" },
];

export const images = {
  portrait: pro1,
  about: about3,
  beyond: beyo,
  setLife: ab1,
  clapperboard: ab2,
  filmReel: ab3,
  cinema: ab4,
  camera: ab5,
  gallery1: ab6,
  gallery2: ab7,
  gallery3: ab8,
  contactSheet: [about1, about2, pro1],
  beyondCamera: ab8,
  new2: new2,
  new3: new3,
  new4: new4,
  new5: new5,
  new6: new6,
  new7: new7,
  new8: new8,
  new9: new9,
  new10: new10,
  new1: new1,
  new11: new11,
  new12: new12,
  new13: new13,
  new14: new14,

  new15: new15,
  new16: new16,
  new17: new17,
  new18: new18,
};

export const galleryImages = [
  { src: images.new14, alt: "Camera setup" },
  { src: images.new10, alt: "Camera setup" },
  { src: images.new1, alt: "Manikandan, portrait" },
  { src: images.new17, alt: "Screening room" },

  { src: images.new3, alt: "Clapperboard, ready for a take" },
  { src: images.new4, alt: "Film reel" },
  { src: images.new7, alt: "Screening room" },
  { src: images.new18, alt: "Behind the scenes" },
  
  { src: images.new8, alt: "Editing suite" },
  { src: images.new12, alt: "Editing suite" },
  { src: images.new11, alt: "Screening room" },
  { src: images.new13, alt: "Behind the scenes" },
];


function getYouTubeId(url) {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/
  );
  return match ? match[1] : "";
}


const ytLyric = (youtube, title, tagline, thumbnail) => ({
  youtube,
  title,
  tagline,
  thumbnail,
});

export const lyrics = [
  ytLyric(
    "https://youtu.be/BqHhOr3opEA?si=jsz_NO4VLwxuNjlQ",
    "Go Green",
    "Lyrics for the Go Green environmental awareness project.",
    goGreenThumb
  ),
  ytLyric(
    "https://youtu.be/Sxmq3sHdrq4?si=Q3gVCkXE_nhe3PwH",
    "Feelayitaplaa",
    "A journey of emotions and storytelling that touches the soul.",
    feelThumb
  ),
  ytLyric(
    "https://youtu.be/VkwdBELUllE",
    "Uravodathan Uravaduven",
    "A tale of bonds that never fade, even in the darkest times.",
    uravoThumb
  ),
  ytLyric(
    "https://youtu.be/iSLz06jTE-A",
    "Kadhal Kadhal",
    "True Love Never Ends · Tamil Melody"
    // no local thumbnail — falls back to YouTube's automatically
  ),
];

export const muviaChannel = {
  name: "Muvia Productions",
  description:
    "All songs featuring lyrics by Manikandan. Click below to view the full YouTube channel and song catalogue.",
  url: "https://youtube.com/@muviaproductions",
};

export { getYouTubeId };