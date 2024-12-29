"use client";

import React, { Suspense, useState } from "react";
import "./education.css";
import education__data from "./education-data";
import { useAnimate, stagger } from "framer-motion";
import DocumentButton from "@/components/document-button/DocumentButton";
import ImageButton from "@/components/image-button/ImageButton";
import SectionWrapper from "../section-wrapper/SectionWrapper";

interface EducationProps {
  translations: {
    title: string;
    description: string;
    education: {
      id: number;
      title: string;
      description: string;
      institution: string;
      viewDocumentsButton: string;
    }[];
  };
}

const Education: React.FC<EducationProps> = ({ translations }) => {
  const [scope, animate] = useAnimate();
  const [cursor, setCursor] = useState(0);

  const setEdu = (index: number) => {
    console.log(index);
    setCursor(index);
    animate(
      ".education__desc-title, .education__desc-content, .education__desc-btn",
      {
        y: [100, 0],
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        type: "spring",
        delay: stagger(0.1),
      }
    );
  };
  const userAgent =
    typeof window === "undefined"
      ? ""
      : navigator.userAgent.toLocaleLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isDesktop = !isIOS && !isAndroid;

  // const handleLocalStorage = () => {
  //   if (window !== undefined) {
  //     localStorage.setItem(
  //       "theme",
  //       JSON.stringify({
  //         primary: "color-3",
  //         bg: "bg-1",
  //       })
  //     );
  //   }
  // };

  return (
    <SectionWrapper id="education">
      <h1>{translations.title}</h1>
      <p>{translations.description}</p>
      <div className="container">
        <div className="education__container" ref={scope}>
          <div className="education__title">
            {translations.education.map((education) => (
              <h5
                key={education.id}
                onClick={() => setEdu(education.id - 1)}
                className={`education__title-item ${
                  cursor === education.id - 1 ? "active" : ""
                }`}
              >
                {education.title}
              </h5>
            ))}
          </div>
          <div className="education__desc">
            {
              <>
                <h3 className="education__desc-title">
                  {translations.education[cursor].institution}
                </h3>
                <div
                  className="education__desc-content"
                  dangerouslySetInnerHTML={{
                    __html: translations.education[cursor].description,
                  }}
                />

                {isDesktop && (
                  <Suspense>
                    <DocumentButton
                      className="education__desc-btn btn primary"
                      title={translations.education[cursor].viewDocumentsButton}
                      pdfFile={education__data[cursor].pdf}
                    />
                  </Suspense>
                )}

                {(isAndroid || isIOS) && (
                  <Suspense>
                    <ImageButton
                      className="education__desc-btn btn primary"
                      title={translations.education[cursor].viewDocumentsButton}
                      images={education__data[cursor].images}
                    />
                  </Suspense>
                )}
              </>
            }
            {/* <button onClick={handleLocalStorage}>set localStorage</button> */}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;
