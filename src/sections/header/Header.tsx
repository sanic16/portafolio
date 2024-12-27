import Image from "next/image";
import classes from "./Header.module.css";
import me from "@/../public/images/me.png";
import DocumentButton from "@/components/document-button/DocumentButton";
import Link from "next/link";
import HeaderWrapper from "./HeaderWrapper";

interface HeaderProps {
  translations: {
    greeting: string;
    description: string;
    cvButton: string;
    contactButton: string;
  };
  lang: "es" | "en";
}

const Header: React.FC<HeaderProps> = ({ translations, lang }) => {
  return (
    <HeaderWrapper>
      <div className={`container ${classes.header__container}`}>
        <div className={classes.avatar}>
          <Image src={me} sizes="200px" alt="avatar" />
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: translations.greeting }} />

        <p>{translations.description}</p>

        <div className={classes.cts}>
          {/* <a href={`pdf/cv.pdf`} download className='btn primary'>
                    Descargar CV
                </a> */}
          <DocumentButton
            className="btn primary"
            pdfFile="documents/cv.pdf"
            title={translations.cvButton}
          />
          <Link href={`/${lang}/contact`} className="btn">
            {translations.contactButton}
          </Link>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
