import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

import styles from "./HeaderLink.module.scss";

// Animation for single link element
const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

interface Props {
  children: string | string[];
  scrollElement: string;
  clicked: () => void;
}

const HeaderLink: React.FC<Props> = ({ children, scrollElement, clicked }) => {
  return (
    <motion.li className={styles.link} variants={liVariants}>
      <Link
        to={scrollElement}
        activeClass={styles.linkActive}
        smooth={true}
        spy={true}
        onClick={clicked}
        offset={-100}
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default HeaderLink;
