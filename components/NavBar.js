import { useEffect, useState, useRef, useContext } from "react";
import styles from "../styles/NavBar.module.css";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavLink from "./NavLink";
import { useWindowSize } from "../hooks/useWindowSize";
import ColorContext from "./context/ColorContext";

export default function Navbar({ iNavRef, theme }) {
  const context = useContext(ColorContext);
  const [initialNavBar, setInitialNavbar] = useState(true);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(true);
  const color = context.color;

  const navRef = useRef(iNavRef);

  if (iNavRef == undefined) {
    navRef.current = "0";
  }

  const size = useWindowSize();

  const handleScroll = () => {
    if (window.scrollY > 10 && size.width > 800) {
      setInitialNavbar(false);
      setOpen(false);
    } else if (window.scrollY == 0 && size.width > 800) {
      setOpen(true);
      setInitialNavbar(true);
    } else {
      setOpen(open);
      setInitialNavbar(false);
    }
  };

  const handleSize = () => {
    if (size.width < 800) {
      setInitialNavbar(false);
      if (window.scrollY == 0) {
        setOpen(false);
      } else {
        setOpen(open);
      }
    } else {
      setInitialNavbar(true);
      setOpen(true);
    }
    if (size.width && size.width < 1000) {
      setOpen(false);
      setInitialNavbar(false);
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  const handleClick = () => {
    // Abre y cierra la barra de navegación haciéndole click
    setOpen(!open);
  };

  const handleRef = (e) => {
    navRef.current = e.target.id;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    handleSize();
  }, [size]);

  // Variantes para las animaciones con Framer Motion.

  const variants = {
    open: { opacity: 1, x: 0, display: "flex" },
    closed: { opacity: 0, pointerEvents: "none", x: "300%", display: "none" },
  };

  const bgVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "300%", width: "0px" },
  };

  const links = [
    {
      text: "HOME",
      link: "/",
      id: 0,
      className: `${initialNavBar ? styles.liFirst : styles.liScrolledFirst}`,
    },
    {
      text: "PROYECTOS",
      link: "/projects",
      id: 1,
      className: `${initialNavBar ? styles.li : styles.liScrolled}`,
    },
    {
      text: "YOUTUBE",
      link: "/youtube",
      id: 2,
      className: `${initialNavBar ? styles.li : styles.liScrolled}`,
    },
    {
      text: "PODCAST",
      link: "/podcast",
      id: 3,
      className: `${initialNavBar ? styles.li : styles.liScrolled}`,
    },
    {
      text: "SOBRE MI",
      link: "/about",
      id: 4,
      className: `${initialNavBar ? styles.li : styles.liScrolled}`,
    },
    {
      text: "CONTACTO",
      link: "/contact",
      id: 5,
      className: `${initialNavBar ? styles.liLast : styles.liLastScrolled}`,
    },
  ];
  return (
    <nav className={styles.wrapper}>
      <main
        style={!open && !mobile ? { justifyContent: "space-between" } : null}
      >
        {/* JIC */}
        <Link href="/">
          <a>
            <h2
              style={
                !mobile
                  ? { color: color, opacity: "1" }
                  : open
                  ? { color: "#fff", opacity: "1" }
                  : { opacity: "0" }
              }
            >
              JIC
            </h2>
          </a>
        </Link>
        <div style={mobile ? { display: "none" } : { flex: "1" }}></div>

        {/* NAV */}
        <motion.nav
          className={styles.nav}
          animate={open ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <motion.div
            className={styles.bg}
            animate={initialNavBar ? "closed" : open ? "open" : "closed"}
            variants={bgVariants}
            transition={{ type: "ease", duration: 0.2 }}
          ></motion.div>
          <ul
            className={
              theme == "light"
                ? styles.light
                : initialNavBar
                ? styles.dark
                : styles.light
            }
          >
            {links.map((link) => {
              return (
                <NavLink
                  text={link.text}
                  navRef={navRef}
                  handleRef={handleRef}
                  id={link.id}
                  link={link.link}
                  className={link.className}
                  key={link.id}
                />
              );
            })}
            <li
              className={styles.links}
              style={mobile ? { display: "flex" } : { display: "none" }}
            >
              <a
                href="https://www.instagram.com/juanignaciocali/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/instagram.svg" alt="Ir a Instagram" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC2Xel3b_bb-RwcpZk0U4yuA"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/youtube.svg" alt="Ir a YouTube" />
              </a>
              <a
                href="mailto:juanignaciocali@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/img/gmail.svg" alt="Contactame por email" />
              </a>
            </li>
          </ul>
        </motion.nav>

        {/* ANVORGUESA */}
        <motion.div
          className={styles.hamb}
          animate={
            initialNavBar ? { opacity: 0, display: "none" } : { opacity: 1 }
          }
          transition={{ duration: 0.5 }}
        >
          <Hamburger
            toggled={open}
            toggle={handleClick}
            size={18}
            className={styles.hamb}
          />
        </motion.div>
      </main>
    </nav>
  );
}
