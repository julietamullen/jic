import {
  NavBar,
  Header,
  Banner,
  Videos,
  Footer,
  WorkTogether,
} from "../../components";
import { useContext } from "react";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { groq } from "next-sanity";
import ColorContext from "../../components/context/ColorContext";

const ytQuery = groq`*[_type=='youtube'] {
    _id,
    "headerURL": header.asset -> url,
    ids,
    "personalImgURL": personalImg.asset -> url
    }`;

const bannerQuery = groq`*[_type=='banner'] {
        _id,
        "bannerURL": banner.asset -> url
        }`;

export default function Youtube({ ytApi, banner }) {
  const { colorWhite } = useContext(ColorContext);
  const videos = ytApi[0].ids;

  return (
    <>
      <Head>
        <title>JIC | YouTube</title>
      </Head>
      <NavBar iNavRef={"2"} theme={"light"} />
      <Header
        img={ytApi[0].headerURL}
        title={`YOUTUBER IN\nPROGRESS`}
        home={false}
      />
      <Videos videos={videos} />
      <InView
        rootMargin="0px 0px -90%"
        onChange={(inView) => inView && colorWhite()}
      >
        <Banner img={banner[0].bannerURL} />
      </InView>
      <WorkTogether text="Trabajemos juntos!" link="/contact" />
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const ytApi = overlayDrafts(await getClient(preview).fetch(ytQuery));
  const banner = overlayDrafts(await getClient(preview).fetch(bannerQuery));
  return {
    props: { ytApi, banner },
    revalidate: 1,
  };
}
