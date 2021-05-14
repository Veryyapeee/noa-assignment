import React from "react";

import styles from "./InfoText.module.scss";

interface Props {
  children: string;
}

const InfoText: React.FC<Props> = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default InfoText;
