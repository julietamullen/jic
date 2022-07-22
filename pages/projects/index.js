import Head from "next/head";
import {
  Header,
  NavBar,
  WorkTogether,
  Footer,
  ProjectsContainer,
  PhGrid,
} from "../../components";
import { getClient, overlayDrafts } from "../../lib/sanity.server";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  projectQuery,
  projectPageQuery,
  gridQuery,
} from "../../queries/sanityQueries";

export default function Projects({ projectsApi, projectsPageApi, pics }) {
  const size = useWindowSize();

  return (
    <>
      <Head>
        <title>JIC | Proyectos</title>
      </Head>

      <NavBar iNavRef={"1"} theme={"light"} />

      <Header
        img={projectsPageApi[0].headerURL}
        home={false}
        title="PROYECTOS"
      />
      <ProjectsContainer projects={projectsApi} size={size} />

      <PhGrid pictures={pics[0].assets} />

      <WorkTogether text="Trabajemos juntos!" link="/contact" />

      <Footer />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const projectsApi = overlayDrafts(
    await getClient(preview).fetch(projectQuery)
  );
  const projectsPageApi = overlayDrafts(
    await getClient(preview).fetch(projectPageQuery)
  );
  const pics = overlayDrafts(await getClient(preview).fetch(gridQuery));
  return {
    props: { projectsApi, projectsPageApi, pics },
    revalidate: 1,
  };
}
