import { useState, useEffect, useContext } from "react";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import ReactPlayer from "react-player";
import NavBar from "../../components/NavBar";
import ProjectHeader from "../../components/ProjectHeader";
import Screenshots from "../../components/Screenshots";
import Footer from "../../components/Footer";
import styles from "../../styles/ProjectPage.module.css";
import Head from "next/head";
import MoreProjects from "../../components/MoreProjects";
import Description from "../../components/Description";
import Backstage from "../../components/Backstage";
import { useWindowSize } from "../../hooks/useWindowSize";
import ColorContext from "../../components/context/ColorContext";

const projectQuery = groq`*[ _type == 'project' ]{
  _id,
  name,
  brand,
  subtitle,
  categories,
  featured,
  process,
  "processPics":processPics[].asset -> url,
  description,
  credits,
  slug,
  videoURL,
  "imageUrl": img.asset->url,
  "screenshots": screenshots[].asset->url,
  "backstagePics" : backstagePics[].asset->url,
  backstageVid,
  backstage,
  _createdAt
} | order(_createdAt asc)`;

export default function Details({ pageSlug, projects }) {
  const thisProject = projects.filter(
    (project) => project?.slug?.current == pageSlug
  ); // Evita que el proyecto actual sea sugerido en la parte de abajo
  const clearProjects = projects.filter(
    (project) => project.name != thisProject[0].name
  );
  const screenshots = thisProject[0].screenshots;

  const [color, setColor] = useState("#000");
  const [moreProjects, setMoreProjects] = useState();

  const size = useWindowSize();

  function getRandom(arr, n) {
    // Función para conseguir dos proyectos al azar que se mostrarán al final de la página
    let result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      let x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    setMoreProjects(result);
  }

  useEffect(() => {
    getRandom(clearProjects, 2);
  }, [pageSlug]);
  const { colorBlack, colorWhite } = useContext(ColorContext);
  return (
    <>
      <Head>
        <title>{thisProject[0].name}</title>
      </Head>
      <main className={styles.main}>
        <NavBar color={color} iNavRef={"1"} theme={"dark"} />
        <InView
          onChange={(InView) => InView && colorBlack()}
          rootMargin="0px 0px -90%"
        >
          <ProjectHeader
            brand={thisProject[0].brand}
            title={thisProject[0].subtitle}
            categories={thisProject[0].categories}
          />
        </InView>
        {thisProject[0].videoURL != null && (
          <div className={styles.videoWrapper}>
            <ReactPlayer
              url={`${thisProject[0].videoURL}`}
              height={"100%"}
              width={"100%"}
              muted={true}
              style={{ position: "absolute", top: "0", left: "0" }}
              config={{
                vimeo: {
                  playerOptions: { autoplay: true },
                },
              }}
            />
          </div>
        )}
        <InView
          onChange={(InView) => InView && colorBlack()}
          rootMargin="0px 0px -90%"
        >
          {thisProject[0].description != null && (
            <Description
              text={thisProject[0].description}
              title="El proyecto"
            />
          )}
        </InView>
        <InView
          onChange={(InView) => InView && colorWhite()}
          rootMargin="0px 0px -90%"
        >
          {thisProject[0].screenshots != null && (
            <Screenshots pictures={screenshots} />
          )}
        </InView>
        <InView
          onChange={(InView) => InView && colorBlack()}
          rootMargin="0px 0px -90%"
        >
          {thisProject[0].process != null && (
            <Description text={thisProject[0].process} title="El proceso" />
          )}
        </InView>
        <InView
          onChange={(InView) => InView && colorWhite()}
          rootMargin="0px 0px -90%"
        >
          {thisProject[0].processPics != null && (
            <Screenshots
              pictures={thisProject[0].processPics}
              last={thisProject[0].backstage == null ? true : false}
            />
          )}
        </InView>
        {(thisProject[0].backstagePics != null ||
          thisProject[0].backstageVid != null ||
          thisProject[0].backstage != null) && (
          <Backstage
            backstage={thisProject[0].backstage}
            backstageVid={thisProject[0].backstageVid}
            backstagePics={thisProject[0].backstagePics}
          />
        )}

        <InView
          onChange={(InView) => InView && colorWhite()}
          rootMargin="0px 0px -90%"
        >
          {thisProject[0].credits && (
            <Description
              text={thisProject[0].credits}
              title="Créditos"
              credits={true}
            />
          )}
        </InView>
        <InView
          onChange={(InView) => InView && colorBlack()}
          rootMargin="0px 0px -90%"
        >
          <MoreProjects moreProjects={moreProjects} size={size} />
        </InView>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const projects = overlayDrafts(await getClient().fetch(projectQuery));
  if (!pageSlug) {
    return {
      notFound: true,
    };
  }
  return {
    props: { pageSlug, projects },
  };
};
