import React, { useState, useEffect } from "react";

import { motion, useCycle } from "framer-motion";

import HeaderLink from "Atoms/HeaderLink/HeaderLink";
import HeaderLogo from "Atoms/HeaderLogo/HeaderLogo";

import Hamburger from "Assets/menu.svg";

import styles from "./Header.module.scss";

// Get window width function
const getWindowWidth = (): number => {
  const { innerWidth: width } = window;
  return width;
};

// Animation for container
const variants = {
  open: {
    height: "auto",
    display: "flex",
    opacity: 1,
    y: 0,
  },
  closed: {
    height: 0,
    opacity: 0,
    y: "-100%",
    display: "none",
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const Header: React.FC = () => {
  // State for screen with and menu bar toggle
  const [sideBar, setSideBar] = useCycle<boolean>(false, true);
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  // Get window with with every resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <header className={styles.header}>
      <div className={styles.logoCon}>
        <HeaderLogo />
        <img
          src={Hamburger}
          alt="Menu toggle icon"
          className={styles.hamburger}
          onClick={() => setSideBar()}
        />
      </div>
      <motion.nav
        animate={!sideBar && windowWidth <= 900 ? "closed" : "open"}
        variants={variants}
        className={styles.navElements}
      >
        <HeaderLink scrollElement="test" clicked={() => setSideBar()}>
          Contact us
        </HeaderLink>
        <HeaderLink scrollElement="test" clicked={() => setSideBar()}>
          Our product
        </HeaderLink>
        <HeaderLink scrollElement="test" clicked={() => setSideBar()}>
          Stay updated
        </HeaderLink>
      </motion.nav>
    </header>
  );
};

export default Header;
