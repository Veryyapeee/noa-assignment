import React from "react";
import { Link } from "react-scroll";

import styles from "./HeaderLink.module.scss";

interface Props {
  children: string | string[];
  scrollElement: string;
  clicked: () => void;
}

const HeaderLink: React.FC<Props> = ({ children, scrollElement, clicked }) => {
  return (
    <li className={styles.link}>
      <Link
        to={scrollElement}
        activeClass={styles.linkActive}
        smooth={true}
        spy={true}
        onClick={clicked}
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
