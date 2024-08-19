"use client";

import Link from "next/link";
import classes from "./Navbar.module.css";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useModalContext } from "@/hooks/hooks";
import { signInAction, signOutAction } from "@/actions";
import { signOut as logout, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import Flag from "react-world-flags";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [bgOnScroll, setBgOnScroll] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);
  const { openModal } = useModalContext();
  const pathnameWithoutLang = pathname.replace(/\/[a-z]{2}/, "");

  useEffect(() => {
    const changeBgOnScroll = () => {
      if (typeof window !== undefined) {
        if (window.scrollY > 0) {
          setBgOnScroll(true);
        } else {
          setBgOnScroll(false);
        }
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBgOnScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBgOnScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`${classes.nav} ${bgOnScroll && classes["navbar--scroll"]}`}
    >
      <div className={`container ${classes.nav__container}`}>
        <Link
          href="/"
          onClick={closeMenu}
          className={`${classes.nav__logo} ${pacifico.className}`}
        >
          JSanic
        </Link>

        <div className={`${classes.nav__menu} ${isOpen && classes.active}`}>
          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/projects" onClick={closeMenu}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li className={classes.nav__theme}>
              <Link
                href="#"
                onClick={() => {
                  closeMenu();
                  openModal();
                }}
              >
                Tema
              </Link>
            </li>
          </ul>
        </div>

        <div className={classes.nav__right}>
          <div className={classes.inter}>
            <Link href={`/es${pathnameWithoutLang}`}>
              <Flag code="GT" width={32} />
            </Link>
            <Link href={`/en${pathnameWithoutLang}`}>
              <Flag code="US" width={32} />
            </Link>
          </div>
          {session && session.data ? (
            <form
              action={async () => {
                await signOutAction();
                await logout();
              }}
            >
              <button className={classes.nav__contact}>Cerrar sesión</button>
            </form>
          ) : (
            <form
              action={async () => {
                await signInAction();
              }}
            >
              <button className={classes.nav__contact}>Iniciar sesión</button>
            </form>
          )}
        </div>

        <button
          className={classes.nav__toggle}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? <FaBars /> : <FaTimes />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
