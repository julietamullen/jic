import Head from "next/head";
import {
  Header,
  NavBar,
  HomeSection,
  WorkTogether,
  Footer,
  Clients,
} from "../components";
import { getClient, overlayDrafts } from "../lib/sanity.server";
import {
  projectQuery,
  homeQuery,
  sectionsQuery,
  clientsQuery,
} from "../queries/sanityQueries";

// HOME APP

export default function Home({ homeApi, sectionApi, clientsApi }) {
  return (
    <>
      <Head>
        <title>JIC</title>
        <meta
          name="description"
          content="Fotógrafo y Filmmaker de Buenos Aires especializado en Comerciales y Videoproducto."
        />
      </Head>
      <NavBar inNavRef={"0"} theme={"light"} />
      <Header
        img={homeApi[0].headerURL}
        home={true}
        title="JUAN IGNACIO CALI"
        subtitle="Filmmaker | Director Creativo | Fotógrafo"
        videoSrc="/video-bg.mp4"
        posterSrc="/poster.webp"
      />
      <Clients clients={clientsApi} />
      {sectionApi?.map((section) => {
        return <HomeSection key={section._id} {...section} />;
      })}
      <WorkTogether text="Listo para que trabajemos juntos?" link="/contact" />
      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projectsApi = overlayDrafts(
    await getClient(preview).fetch(projectQuery)
  );

  const homeApi = overlayDrafts(await getClient(preview).fetch(homeQuery));

  const sectionApi = overlayDrafts(
    await getClient(preview).fetch(sectionsQuery)
  );
  const clientsApi = overlayDrafts(
    await getClient(preview).fetch(clientsQuery)
  );

  return {
    props: { projectsApi, homeApi, sectionApi, clientsApi },
    revalidate: 1,
  };
}
