import React from "react";

import WavesTop from "Atoms/WavesTop/WavesTop";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletterCon}>
      <WavesTop color="#fff" />
    </section>
  );
};

export default Newsletter;
