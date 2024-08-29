import Image from "next/image";

import image from "@/../public/images/me.jpg";
import "./about.css";
import Link from "next/link";
import about_data from "./about__data";
import { FC } from "react";

interface AboutProps {
  translations: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
    contactText: string;
    name: string;
    hireMeButton: string;
  };
  lang: "en" | "es";
}

const About: FC<AboutProps> = ({ translations, lang }) => {
  console.log(lang);
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__container-left">
          <h1>{translations.title}</h1>
          <p>{translations.description1}</p>
          <p>{translations.description2}</p>
          <p>{translations.description3}</p>
          <p>{translations.description4}</p>
          <div className="container about__knwl">
            {about_data.map((item) => (
              <div key={item.id} className="about__knwl-item">
                <item.icon />
              </div>
            ))}
          </div>
        </div>
        <div className="about__container-right">
          <div className="about__desc">
            <div className="about__img">
              <Image src={image} alt="Julio Sanic" />
            </div>
            <div className="about__img-caption">
              <h3>{translations.name}</h3>
              <p>{translations.contactText}</p>
              <div className="about__img-btn">
                <Link href={`/${lang}/contact`}>
                  {translations.hireMeButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
