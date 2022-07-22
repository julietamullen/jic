import titleStyle from "../styles/Description.module.css";
import { InView } from "react-intersection-observer";
import Description from "./Description";
import AboutVideo from "./AboutVideo";
import Screenshots from "./Screenshots";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";

export default function Backstage({ backstage, backstageVid, backstagePics }) {
  const { colorBlack, colorWhite } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.

  return (
    <>
      <section className={titleStyle.description} id={titleStyle.hola}>
        <article>
          {backstage || backstageVid || backstagePics ? (
            <h2 className={titleStyle.title}>El backstage</h2>
          ) : null}
        </article>
      </section>

      {backstage != null && (
        <InView
          rootMargin="0px 0px -90%"
          onChange={(InView) => InView && colorBlack()}
        >
          <Description text={backstage} />
        </InView>
      )}
      {backstageVid != null && <AboutVideo videoID={backstageVid} />}
      {backstagePics != null && (
        <InView
          rootMargin="0px 0px -90%"
          onChange={(InView) => InView && colorWhite()}
        >
          <Screenshots pictures={backstagePics} last={true} />
        </InView>
      )}
    </>
  );
}
