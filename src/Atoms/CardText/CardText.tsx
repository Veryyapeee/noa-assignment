import React from "react";

import styles from "./CardText.module.scss";

interface Props {
  children: string | string[];
}

const CardText: React.FC<Props> = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default CardText;
