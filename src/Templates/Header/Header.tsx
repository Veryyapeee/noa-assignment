import React from "react";

import HeaderLink from "Atoms/HeaderLink/HeaderLink";
import HeaderLogo from "Atoms/HeaderLogo/HeaderLogo";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const onClick = () => {};
  return (
    <header className={styles.header}>
      <div className={styles.logoCon}>
        <HeaderLogo />
      </div>
      <HeaderLink scrollElement="test" clicked={onClick}>
        Contact us
      </HeaderLink>
      <HeaderLink scrollElement="test" clicked={onClick}>
        Our product
      </HeaderLink>
      <HeaderLink scrollElement="test" clicked={onClick}>
        Stay updated
      </HeaderLink>
    </header>
  );
};

export default Header;
