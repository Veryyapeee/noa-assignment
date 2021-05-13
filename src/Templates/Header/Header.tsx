import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import HeaderLink from "Atoms/HeaderLink/HeaderLink";
import HeaderLogo from "Atoms/HeaderLogo/HeaderLogo";

import Hamburger from "Assets/menu.svg";

import styles from "./Header.module.scss";

// Get window width function
const getWindowWidth = (): number => {
  const { innerWidth: width } = window;
  return width;
};

// Animation from framer-motion
const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: { opacity: 0, x: "-100%" },
};

const Header: React.FC = () => {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());

  // Get window with with every resize
  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const onClick = () => {};
  return (
    <header className={styles.header}>
      <div className={styles.logoCon}>
        <HeaderLogo />
        <img
          src={Hamburger}
          alt="hamburger"
          className={styles.hamburger}
          onClick={() => setSideBar(!sideBar)}
        />
      </div>
      <motion.div
        animate={!sideBar && windowWidth <= 900 ? "closed" : "open"}
        variants={variants}
        className={styles.navElements}
        style={{
          display: !sideBar && windowWidth <= 900 ? "none" : "flex",
        }}
      >
        <HeaderLink scrollElement="test" clicked={onClick}>
          Contact us
        </HeaderLink>
        <HeaderLink scrollElement="test" clicked={onClick}>
          Our product
        </HeaderLink>
        <HeaderLink scrollElement="test" clicked={onClick}>
          Stay updated
        </HeaderLink>
      </motion.div>
    </header>
  );
};

export default Header;
