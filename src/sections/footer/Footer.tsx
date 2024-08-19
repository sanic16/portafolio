import React from "react";
import "./footer.css";
import { FaJava, FaJs, FaPhone, FaPython } from "react-icons/fa";
import { SiCplusplus, SiCsharp } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

interface FooterTranslations {
  translations: {
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
  };
}

const Footer: React.FC<FooterTranslations> = ({ translations }) => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer__container">
        <div className="footer__desc">
          <h3>{translations.title}</h3>
          <p>{translations.description}</p>
          <div className="footer__desc-lang">
            <span>
              <FaJs />
            </span>
            <span>
              <FaPython />
            </span>
            <span>
              <SiCsharp />
            </span>
            <span>
              <FaJava />
            </span>
            <span>
              <SiCplusplus />
            </span>
          </div>
          <h3>{translations.contactTitle}</h3>
          <ul className="footer__contact">
            <li>
              <a href={`tel:${translations.contact.phone}`}>
                <FaPhone /> {translations.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${translations.contact.email1}`}>
                <IoMdMail /> {translations.contact.email1}
              </a>
            </li>
            <li>
              <a href={`mailto:${translations.contact.email2}`}>
                <IoMdMail /> {translations.contact.email2}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__languages">
          <h3>{translations.languagesTitle}</h3>
          <ul>
            {translations.languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
        <div className="footer__frameworks">
          <h3>{translations.frameworksTitle}</h3>
          <ul>
            {translations.frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </div>
        <div className="footer__others">
          <h3>{translations.othersTitle}</h3>
          <ul>
            {translations.others.map((other, index) => (
              <li key={index}>{other}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container copyright">
        <p>&copy; {new Date().getFullYear()} Julio Sanic.</p>
      </div>
    </footer>
  );
};

export default Footer;
