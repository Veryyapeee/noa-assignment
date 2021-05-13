import React from "react";

import Logo from "Assets/logo.png";

import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return <img src={Logo} alt="Company logo" className={styles.logo} />;
};

export default HeaderLogo;
