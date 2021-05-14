import React from "react";

import styles from "./ItalicTitle.module.scss";

interface Props {
  children: string | string[];
}

const ItalicTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default ItalicTitle;
