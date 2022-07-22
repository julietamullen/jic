import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default function Header({ title, subtitle, home }) {
  const { colorWhite } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    <InView
      as="header"
      className={home ? styles.homeWrapper : styles.wrapper}
      id="header"
      rootMargin="0px 0px -90%"
      onChange={(InView) => InView && colorWhite()}
    >
      <div className={styles.header}>
        <video src="/video-bg.mp4" muted loop autoPlay />
        <section className={styles.elements}>
          <h1>{title}</h1>
          {subtitle && (
            <h2>
              <i className={styles.i}>{subtitle}</i>
            </h2>
          )}
          {title == "JUAN IGNACIO CALI" && (
            <Link href="/#projects">
              <a>Mis proyectos</a>
            </Link>
          )}
        </section>
      </div>
    </InView>
  );
}
