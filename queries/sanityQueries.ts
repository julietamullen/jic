import { groq } from "next-sanity";

interface projectProps {
  _id: string;
  name: string;
  categories: string;
  featured: boolean;
  slug: string;
  imageUrl: string;
}

interface homeProps {
  _id: string;
  headerURL: string;
  headerMobileURL: string;
  personalImgURL: string;
}

interface sectionsProps {
  _id: string;
  name: string;
  title: string;
  subtitle: string;
  contentPosition: string;
  parallax: boolean;
  hidden: boolean;
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
  link: string;
}

const projectQuery = groq`*[ _type == 'project' ]{
    name,
    _id,
    categories,
    hidden,
    featured,
    slug,
    "imageUrl": img.asset->url,
    _createdAt
  } | order(_createdAt desc)`;

const homeQuery = groq`*[ _type == 'home' ]{
    _id,
    "headerURL": header.asset->url,
    "headerMobileURL": headerMobile.asset->url,
    "personalImgURL": personalImg.asset->url,
  }`;

const sectionsQuery = groq`*[ _type == 'section' ]{
    _id, 
    name,
    title,
    subtitle,
    contentPosition,
    parallax,
    hidden,
    "backgrounds": {
      "desktop": backgrounds.desktop_bg.asset->{url, metadata{dimensions{width, height}}}, 
      "mobile": backgrounds.mobile_bg.asset->{url, metadata{dimensions{width, height}}}
    },
    link,
    _createdAt
  } | order(_createdAt asc)`;

const projectPageQuery = groq`*[ _type == 'projectsPage' ]{
    _id,
    "headerURL": header.asset->url,
}`;

const gridQuery = groq`*[_type=='phGrid'] {_id, 'assets': pics[].asset->url}`;

const clientsQuery = groq`*[ _type == 'clients' ]{
  _id, 
  "logos": images[].asset->{"imgUrl":url, "imgData": metadata{dimensions{width, height}}}
}`;

export {
  projectQuery,
  homeQuery,
  sectionsQuery,
  projectPageQuery,
  gridQuery,
  clientsQuery,
};
