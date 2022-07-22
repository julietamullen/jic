import styles from "../styles/WorkTogether.module.css";
import Link from "next/link";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import { InView } from "react-intersection-observer";

interface iWorkTogether {
  text: string;
  buttonText: string;
  link: string;
}

export default function WorkTogether({
  text,
  buttonText,
  link,
}: iWorkTogether) {
  const { colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.
  return (
    <InView
      rootMargin="0px 0px -90%"
      onChange={(InView) => InView && colorBlack()}
      className={styles.container}
    >
      <section>
        <h2>{text}</h2>
        <Link href="/#projects" target="_blank" rel="noreferrer">
          <button>{buttonText ? buttonText : "Empecemos"}</button>
        </Link>
      </section>
    </InView>
  );
}
