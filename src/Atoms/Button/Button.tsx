import React from "react";

import styles from "./Button.module.scss";

interface Props {
  children: string;
  disabled: boolean;
}

const Button: React.FC<Props> = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
