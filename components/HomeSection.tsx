import styles from "../styles/HomeSection.module.css";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";

interface iHomeSection {
  _id: string;
  title: string;
  subtitle: string;
  image: string;
  color?: string;
  type?: string;
  hidden?: boolean;
  parallax?: boolean;
  contentPosition: string;
  backgrounds: {
    desktop: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
    mobile: {
      url: string;
      metadata: { dimensions: { width: number; height: number } };
    };
  };
}

const HomeSection = (props: iHomeSection) => {
  const {
    title,
    subtitle,
    type,
    parallax,
    color = "white",
    hidden,
    backgrounds,
    contentPosition,
  } = props;
  const { colorWhite, colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    !hidden && (
      <InView
        rootMargin="0px 0px -90%"
        as="section"
        className={styles.homeSection}
        onChange={(InView) => InView && colorWhite()}
      >
        <div
          className={`${styles.content} ${styles[contentPosition]} ${
            styles[title?.toLocaleLowerCase()]
          }`}
        >
          <h2>{title !== "Podcast" && title}</h2>
          <p>{subtitle}</p>
        </div>
        <Image
          src={backgrounds?.desktop.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={90}
        />
        {title === "Podcast" && (
          <img className={styles.button} src="/podcast-button.png" alt="" />
        )}
      </InView>
    )
  );
};

export default HomeSection;
