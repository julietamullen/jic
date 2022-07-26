import styles from "../styles/HomeSection.module.scss";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import Link from "next/link";
import { SectionsProps } from "../queries/sanityQueries";
import { Parallax } from "react-parallax";

const HomeSection = (props: SectionsProps) => {
  const {
    title,
    subtitle,
    parallax,
    link,
    backgroundColor = "white",
    hidden,
    backgrounds,
    contentPosition,
    buttonText,
    showContent,
  } = props;
  const { colorWhite, colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    !hidden &&
    (parallax ? (
      <InView
        rootMargin="0px 0px -90%"
        as="section"
        onChange={(InView) =>
          InView && (backgroundColor === "white" ? colorWhite() : colorBlack())
        }
      >
        <Parallax
          bgImage={backgrounds?.desktop.url}
          bgImageAlt={title}
          strength={-300}
          className={styles.parallax}
          contentClassName={`${styles.parallaxContent} ${
            styles[contentPosition]
          } ${styles[title?.toLocaleLowerCase()]}`}
        >
          {showContent && (
            <div className={contentPosition}>
              {title && <h2>{title}</h2>}
              {subtitle && <p>{subtitle}</p>}
              {buttonText && (
                <Link href={link ?? "/youtube"}>
                  <button>{buttonText}</button>
                </Link>
              )}
            </div>
          )}
        </Parallax>
      </InView>
    ) : (
      <InView
        rootMargin="0px 0px -90%"
        as="section"
        className={styles.homeSection}
        onChange={(InView) =>
          InView && (backgroundColor === "white" ? colorWhite() : colorBlack())
        }
      >
        {showContent && (
          <div
            className={`${styles.content} ${styles[contentPosition]} ${
              styles[title?.toLocaleLowerCase()]
            }`}
          >
            <h2>{title !== "Podcast" && title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {buttonText && (
              <Link href={link ?? "/youtube"}>
                <button>{buttonText}</button>
              </Link>
            )}
          </div>
        )}
        <Image
          src={backgrounds?.desktop.url}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={90}
        />
        {title === "Podcast" && (
          <Link href="/podcast">
            <img className={styles.button} src="/podcast-button.png" alt="" />
          </Link>
        )}
      </InView>
    ))
  );
};

export default HomeSection;
