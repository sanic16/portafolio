"use client";

import DocumentButton from "@/components/document-button/DocumentButton";
import ImageButton from "@/components/image-button/ImageButton";
import Link from "next/link";
import { FC, Suspense } from "react";
import classes from "./Header.module.css";

type HeaderControlsProps = {
  cvButtonTranslation: string;
  contactButtonTranslation: string;
  lang: "es" | "en";
};

const HeaderControls: FC<HeaderControlsProps> = ({
  contactButtonTranslation,
  cvButtonTranslation,
  lang,
}) => {
  const userAgent =
    typeof window === "undefined"
      ? ""
      : navigator.userAgent.toLocaleLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isAndroid = /android/.test(userAgent);
  const isDesktop = !isIOS && !isAndroid;
  return (
    <div className={classes.cts}>
      {/* <a href={`pdf/cv.pdf`} download className='btn primary'>
            Descargar CV
        </a> */}
      {isDesktop && (
        <Suspense>
          <DocumentButton
            className="btn primary"
            pdfFile="documents/cv.pdf"
            title={cvButtonTranslation}
          />
        </Suspense>
      )}

      {(isAndroid || isIOS) && (
        <Suspense>
          <ImageButton
            className="btn primary"
            images={[
              "images/udemy/cv_page-0001.jpg",
              "images/udemy/cv_page-0002.jpg",
              "images/udemy/cv_page-0003.jpg",
            ]}
            title={cvButtonTranslation}
          />
        </Suspense>
      )}
      <Link href={`/${lang}/contact`} className="btn">
        {contactButtonTranslation}
      </Link>
    </div>
  );
};

export default HeaderControls;
