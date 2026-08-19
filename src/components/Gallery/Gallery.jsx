import React from "react";
import "./Gallery.css";
import pro1 from "../../assets/ima1/sub/1.JPG";
import about1 from "../../assets/ima1/sub/2.JPG";
import about2 from "../../assets/ima1/sub/3.JPG";
import ab1 from "../../assets/ima1/sub/11.JPG";
import ab2 from "../../assets/ima1/sub/ab.jpeg";
import ab4 from "../../assets/ima1/sub/31.JPG";
import ab6 from "../../assets/ima1/sub/10.JPG";
import ab8 from "../../assets/ima1/sub/35.JPG";


const images = [ pro1, about1, about2, ab1, ab2, ab4, ab6, ab8 ];

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

export default function Gallery() {
  const clusters = chunk(images, 8);

  return (
    <section className="mkGallery" id="gallery">
      <div className="mkGallery__container">
        <div className="mkGallery__head">
          <p className="mkGallery__eyebrow">Behind The Lens</p>
          <h2 className="mkGallery__title">On set &amp; behind the scenes</h2>
          <p className="mkGallery__sub">
            A running frame of moments from the set — unfiltered, unposed.
          </p>
        </div>

        {clusters.map((cluster, ci) => (
          <div className="mkGallery__wall" key={ci}>
            {cluster.map((src, i) => (
              <figure
                className="mkGallery__item"
                key={`${ci}-${i}`}
                style={{ "--i": i }}
              >
                <div className="mkGallery__frame">
                  <div className="mkGallery__mat">
                    <img src={src} alt="" loading="lazy" />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}