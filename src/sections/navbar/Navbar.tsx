"use client";

import Link from "next/link";
import classes from "./Navbar.module.css";
import { Oswald } from "next/font/google";
import { Suspense, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useModalContext } from "@/hooks/hooks";
import { useParams, usePathname } from "next/navigation";
import NavLink from "./NavLink";
import SearchInput from "./SearchInput";
import NavAuth from "./NavAuth";

const bebas_neue = Oswald({ subsets: ["latin"], weight: ["400"] });

interface NavbarTranslations {
  translations: {
    home: string;
    projects: string;
    blog: string;
    theme: string;
    signIn: string;
    signOut: string;
  };
}

const Navbar: React.FC<NavbarTranslations> = ({ translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);
  const { openModal } = useModalContext();
  const { lang } = useParams<{ lang: "es" | "en" }>();
  const pathnameWithoutLang = pathname.replace(/\/[a-z]{2}/, "");

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (typeof window !== undefined && window.innerWidth > 576) {
        if (window.scrollY > 0) {
          setBgOnScroll(true);
        } else {
          setBgOnScroll(false);
        }
      }
    };

    if (typeof window !== "undefined" && window.innerWidth > 576) {
      window.addEventListener("scroll", changeBgOnScroll);
    }

    return () => {
      if (typeof window !== "undefined" && window.innerWidth > 576) {
        window.removeEventListener("scroll", changeBgOnScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 576) {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    }

    return () => {
      if (typeof window !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  });

  return (
    <div
      className={`${classes.navbar__container} ${
        bgOnScroll && classes["navbar--scroll"]
      }`}
    >
      <div className={`container ${classes.nav__container}`}>
        <div className={classes.logo}>
          <Link
            href={`/${lang}/`}
            className={`${classes.nav__logo} ${bebas_neue.className}`}
          >
            Julio Sanic
          </Link>
        </div>
        <div className={classes.search}>
          <Suspense>
            <SearchInput lang={lang} />
          </Suspense>
        </div>
        <div className={classes.login}>
          <NavAuth />
        </div>

        <div className={classes.inter}>
          <Link href={`/es${pathnameWithoutLang}`}>ES</Link> |{" "}
          <Link href={`/en${pathnameWithoutLang}`}>EN</Link>
        </div>

        <nav className={`${classes.nav__menu} ${isOpen && classes.active}`}>
          <ul className={classes.menu__list}>
            <li className={classes["menu__item-search"]}>
              <Suspense>
                <SearchInput lang={lang} />
              </Suspense>
            </li>
            <li className={classes.menu__item}>
              <NavLink
                href={`/${lang}`}
                className={classes.menu__link}
                activeClassName={classes.active}
                onClick={closeMenu}
              >
                {translations.home}
              </NavLink>
            </li>
            <li className={classes.menu__item}>
              <NavLink
                href={`/${lang}/projects/1`}
                className={classes.menu__link}
                activeClassName={classes.active}
                onClick={closeMenu}
              >
                {translations.projects}
              </NavLink>
            </li>
            <li className={classes["menu__item-theme"]}>
              <button
                className={classes.menu__theme}
                onClick={() => {
                  openModal();
                  closeMenu();
                }}
              >
                {translations.theme}
              </button>
            </li>
            <li className={classes["menu__item-login"]}>
              <NavAuth className={classes.menu__login} />
            </li>
            <li className={classes["menu__item-inter-mobile"]}>
              <div className={classes["menu__item-mobile"]}>
                <Link href={`/es${pathnameWithoutLang}`}>ES</Link> |{" "}
                <Link href={`/en${pathnameWithoutLang}`}>EN</Link>
              </div>
            </li>
          </ul>
        </nav>

        <div
          className={`${classes.menu__icon} ${isOpen && classes["menu--open"]}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
