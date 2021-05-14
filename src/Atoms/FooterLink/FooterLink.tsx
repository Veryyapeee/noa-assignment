import React from "react";

import styles from "./FooterLink.module.scss";

interface Props {
  children: string;
  link: string;
}

const FooterLink: React.FC<Props> = ({ children, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
      {children}
    </a>
  );
};

export default FooterLink;
