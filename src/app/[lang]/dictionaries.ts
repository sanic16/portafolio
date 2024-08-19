import "server-only";

export interface Lang {
  header: Header;
  about: About;
  projects: Project;
  services: Service;
  education: Education;
  footer: Footer;
  navbar: Navbar;
}

export interface About {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  contactText: string;
  name: string;
  hireMeButton: string;
}

export interface Header {
  greeting: string;
  description: string;
  cvButton: string;
  contactButton: string;
}

export interface Project {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  services: {
    id: number;
    title: string;
    description: string;
    viewMoreButton: string;
  }[];
}

export interface Education {
  title: string;
  description: string;
  education: {
    id: number;
    title: string;
    description: string;
    institution: string;
    viewDocumentsButton: string;
  }[];
}

export interface Footer {
  title: string;
  description: string;
  contactTitle: string;
  contact: {
    phone: string;
    email1: string;
    email2: string;
  };
  languagesTitle: string;
  languages: string[];
  frameworksTitle: string;
  frameworks: string[];
  othersTitle: string;
  others: string[];
}

export interface Navbar {
  home: string;
  projects: string;
  blog: string;
  theme: string;
  signIn: string;
  signOut: string;
}

const dictionaries: { [key: string]: () => Promise<Lang> } = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (lang: string) => dictionaries[lang]();
