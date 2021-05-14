import React, { useState } from "react";

import WavesTop from "Atoms/WavesTop/WavesTop";
import NewsletterTitle from "Atoms/NewsletterTitle/NewsletterTItle";
import Form from "Organism/Form/Form";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  const [form, setForm] = useState({
    email: {
      val: "",
      type: "text",
      inputType: "input",
      label: "E-mail",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 50,
        emailComplexity: true,
      },
      errorMessage: "xD",
      touched: false,
      valid: false,
    },
  });
  const test = () => {
    console.log("test");
  };
  return (
    <section className={styles.newsletterCon} id="newsletter">
      <WavesTop color="#fff" />
      <div className={styles.contentCon}>
        <NewsletterTitle>Sign up for our newsletter</NewsletterTitle>
        <Form
          config={form}
          setConfig={setForm}
          buttonTitle="SIGN UP"
          onSubmit={test}
        />
      </div>
    </section>
  );
};

export default Newsletter;
