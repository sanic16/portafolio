import Image from "next/image";
import classes from "./Header.module.css";
import me from "@/../public/images/julius.png";
import DocumentButton from "@/components/document-button/DocumentButton";

const Header = () => {
  return (
    <header id="header" className={classes.header}>
      <div className={`container ${classes.header__container}`}>
        <div className={classes.avatar}>
          <Image src={me} sizes="200px" alt="avatar" />
        </div>
        <h1>
          Que tal!, soy <span>Julio Sanic</span>
        </h1>
        <p>
          Desarrollador Web Full Stack con conocimientos en JavaScript y Python
          para el desarrollo de aplicaciones embebidas.
        </p>

        <div className={classes.cts}>
          {/* <a href={`pdf/cv.pdf`} download className='btn primary'>
                    Descargar CV
                </a> */}
          <DocumentButton
            className="btn primary"
            pdfFile="pdf/cv.pdf"
            title="Ver CV"
          />
          <a href="/contact" className="btn">
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
