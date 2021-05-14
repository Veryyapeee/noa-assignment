import React from "react";

import styles from "./MainTitle.module.scss";

interface Props {
  children: any;
}

const MainTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default MainTitle;
