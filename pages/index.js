import Head from 'next/head'
import Header from "../components/Header"
import Featured from "../components/Featured"
import Services from "../components/Services"
import NavBar from "../components/NavBar"
import ContactCard from "../components/ContactCard"
import WorkTogether from "../components/WorkTogether"
import Footer from "../components/Footer"
import { InView } from 'react-intersection-observer';
import {useState, useEffect} from "react"
import { getClient, overlayDrafts } from '../lib/sanity.server'
import {groq} from 'next-sanity'

// QUERIES PARA SANITY

const projectQuery = groq`*[ _type == 'project' ]{
  name,
  _id,
  categories,
  featured,
  slug,
  "imageUrl": img.asset->url,
  _createdAt
} | order(_createdAt asc)`

const homeQuery = groq`*[ _type == 'home' ]{
  _id,
  "headerURL": header.asset->url,
  "parallaxURL": parallax.asset->url,
  "personalImgURL": personalImg.asset->url,
  "parallaxMobileURL": parallaxMobile.asset->url
}`

// HOME APP

export default function Home({projectsApi, homeApi}) {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
})

  const [color, setColor] = useState("#FFF")

  const handleScroll = () => {
    if (window.scrollY < 10) {
      setColor("#FFF")
    } else if (window.scrollY < 600) {
      setColor("#000")
    } else {
      setColor(color)
    }
}

useEffect(() => handleScroll(), [])
    
  return (<>
      <Head>
        <title>JIC</title>
      </Head>
      <NavBar color={color} inNavRef={"0"} theme={"light"}/>
      <InView onChange={(inView) => inView && setColor("#FFF")}>
      <Header img={homeApi[0].headerURL} title="JUAN IGNACIO CALI" subtitle="Filmmaker | Director Creativo | Fotógrafo"/>
      </InView>
      <InView onChange={(inView) => inView && setColor("#000")}>
      <Featured projects={projectsApi}/>
      </InView>
      <InView onChange={(inView) => inView && setColor("#000")}>
      <Services/>
      </InView>
      <InView onChange={(inView) => inView && setColor("#FFF")}>
      <ContactCard img={homeApi[0].personalImgURL}/>
      </InView>
      <InView onChange={(inView) => inView && setColor("#000")}>
      <WorkTogether text="Trabajemos juntos!" link="/"/>
      </InView>
      <Footer/>
      </>
  )
}

export async function getStaticProps({ preview = false }) {
  const projectsApi = overlayDrafts(await getClient(preview).fetch(projectQuery))
  const homeApi = overlayDrafts(await getClient(preview).fetch(homeQuery))
  return {
    props: { projectsApi, homeApi },
    revalidate: 1
  }
}
