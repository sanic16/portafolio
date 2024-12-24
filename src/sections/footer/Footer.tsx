import React from "react";
import "./footer.css";
import type { Footer } from "@/app/[lang]/dictionaries";
import Link from "next/link";

const Footer: React.FC<Footer> = ({
  title,
  description,
  contact,
  navbar,
  rights,
}) => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__description">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="footer__contact">
            <h3>{contact.title}</h3>
            <ul>
              <li>
                <a href={`mailto:${contact.email2}`}>{contact.email2}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`}>+502 {contact.phone}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__navbar">
            <ul>
              <li>
                <Link href={`/`}>{navbar.home}</Link>
              </li>
              <li>
                <Link href={`/projects`}>{navbar.projects}</Link>
              </li>
              <li>
                <Link href={`/blog`}>{navbar.blog}</Link>
              </li>
            </ul>
          </div>
          <div className="footer__copyright">
            &copy; {new Date().getFullYear()}. {rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
