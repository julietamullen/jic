import Head from "next/head";
import {
  AboutHeader,
  TextSlider,
  PhGrid,
  WorkTogether,
  Footer,
  Presentation,
  AboutVideo,
  NavBar,
} from "../../components";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import { useContext } from "react";
import ColorContext from "../../components/context/ColorContext";

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`;

const aboutQuery = groq`*[_type=='about'] {
    _id,
    "headerURL": header.asset -> url,
    "personalImgURL": personalImg.asset -> url,
    text,
    videoID,
    text
    }`;

const manifiestoQuery = groq`*[_type=='frase'] {
        _id,
        title,
        phrase,
        phraseMobile,
        order
      } | order(orden asc)`;

export default function About({ pics, aboutApi, slidesA }) {
  const { colorBlack, colorWhite } = useContext(ColorContext);
  return (
    <>
      <Head>
        <title>JIC | Sobre Mi</title>
      </Head>
      <NavBar iNavRef={"4"} theme={"light"} />
      <AboutHeader title="SOBRE MI" img={aboutApi[0].headerURL} />
      <Presentation img={aboutApi[0].personalImgURL} text={aboutApi[0].text} />
      {aboutApi[0].videoID ? (
        <AboutVideo
          videoID={aboutApi[0].videoID}
          title="Un film acerca de mí"
        />
      ) : null}
      <PhGrid pictures={pics[0].assets} />
      <TextSlider slidesA={slidesA} />
      <InView
        rootMargin="0px 0px -90%"
        onChange={(InView) => (InView ? colorBlack() : colorWhite())}
      >
        <WorkTogether text="Trabajemos juntos!" link="/contact" />
      </InView>
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const pics = overlayDrafts(await getClient(preview).fetch(gridQuery));
  const aboutApi = overlayDrafts(await getClient(preview).fetch(aboutQuery));
  const slidesA = overlayDrafts(
    await getClient(preview).fetch(manifiestoQuery)
  );
  return {
    props: { pics, aboutApi, slidesA },
    revalidate: 1,
  };
}
