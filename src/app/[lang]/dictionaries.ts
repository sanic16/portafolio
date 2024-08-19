import "server-only";

export interface Lang {
  header: Header;
  about: About;
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

const dictionaries: { [key: string]: () => Promise<Lang> } = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (lang: string) => dictionaries[lang]();
