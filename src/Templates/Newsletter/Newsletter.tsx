import React from "react";

import WavesTop from "Atoms/WavesTop/WavesTop";
import NewsletterTitle from "Atoms/NewsletterTitle/NewsletterTItle";
import Form from "Organism/Form/Form";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletterCon}>
      <WavesTop color="#fff" />
      <div className={styles.contentCon}>
        <NewsletterTitle>Sign up for our newsletter</NewsletterTitle>
        <Form />
      </div>
    </section>
  );
};

export default Newsletter;
