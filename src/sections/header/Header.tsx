import Image from "next/image";
import classes from "./Header.module.css";
import me from "@/../public/images/me_header.jpg";
import HeaderWrapper from "./HeaderWrapper";
import HeaderControls from "./HeaderControls";

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

        <HeaderControls
          contactButtonTranslation={translations.contactButton}
          cvButtonTranslation={translations.cvButton}
          lang={lang}
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
