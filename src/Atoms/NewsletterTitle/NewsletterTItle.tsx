import React from "react";

import styles from "./NewsletterTitle.module.scss";
interface Props {
  children: string;
}

const NewsletterTitle: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default NewsletterTitle;
