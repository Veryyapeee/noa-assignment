import React from "react";

import styles from "./TitleIcon.module.scss";

interface Props {
  src: string;
  alt: string;
}

const TitleIcon: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.icon} />;
};

export default TitleIcon;
