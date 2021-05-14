import React from "react";

import FooterInfo from "Molecules/FooterInfo/FooterInfo";
import UnderlineTitle from "Atoms/UnderlineTitle/UnderlineTitle";
import InfoText from "Atoms/InfoText/InfoText";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <FooterInfo>
        <UnderlineTitle>Contact</UnderlineTitle>
        <InfoText>(+48) 123 123 123</InfoText>
        <InfoText>smoothies@delight.com</InfoText>
      </FooterInfo>
      <FooterInfo>
        <UnderlineTitle>Address</UnderlineTitle>
        <InfoText>Huston</InfoText>
        <InfoText>Sample street 13/4</InfoText>
      </FooterInfo>
    </footer>
  );
};

export default Footer;
