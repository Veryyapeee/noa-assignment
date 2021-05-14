import React from "react";

import styles from "./SocialIcons.module.scss";

import Facebook from "Assets/facebook.png";
import Instagram from "Assets/instagram.png";
import Twitter from "Assets/twitter.png";

const SocialIcons = () => {
  return (
    <div className={styles.icons}>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className={styles.icon}
      >
        <img src={Facebook} alt="Facebook link" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className={styles.icon}
      >
        <img src={Instagram} alt="Instagram link" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className={styles.icon}
      >
        <img src={Twitter} alt="Twitter link" />
      </a>
    </div>
  );
};

export default SocialIcons;
