import styles from "../styles/Slider.module.css";
import React, { useState } from "react";

export default function TextSlider({ slidesA }) {
  const slides = slidesA.sort(function (a, b) {
    return a.order - b.order;
  });

  const [index, setIndex] = useState(0);

  return (
    <section className={styles.wrapper}>
      <h3>Mi Manifiesto</h3>
      <div className={styles.slider}>
        <div className={styles.dots}>
          {slides.map((slide) => {
            return (
              <label className={styles.container} key={slides.indexOf(slide)}>
                <input
                  type="radio"
                  id={slides.indexOf(slide)}
                  name="dot"
                  value={slides.indexOf(slide)}
                  onChange={() => {
                    setIndex(slides.indexOf(slide));
                  }}
                  checked={index == slides.indexOf(slide) ? "checked" : ""}
                />
                <span className={styles.checkmark}></span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}
