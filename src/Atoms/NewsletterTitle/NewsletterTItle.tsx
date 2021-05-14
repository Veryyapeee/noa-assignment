import React from "react";

import styles from "./Newsletter.module.scss";

interface Props {
  children: string;
}

const NewsletterTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default NewsletterTitle;
