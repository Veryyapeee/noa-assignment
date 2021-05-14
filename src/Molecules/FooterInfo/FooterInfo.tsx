import React from "react";

import styles from "./FooterInfo.module.scss";

interface Props {
  children: (string | JSX.Element)[];
}

const FooterInfo: React.FC<Props> = ({ children }) => {
  return <div className={styles.con}>{children}</div>;
};

export default FooterInfo;
