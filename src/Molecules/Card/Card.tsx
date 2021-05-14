import React from "react";

import styles from "./Card.module.scss";

interface Props {
  children: (string | JSX.Element)[];
}

const Card: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.cardCon}>
      <div className={styles.cardWrapper}>{children}</div>
    </div>
  );
};

export default Card;
