import React from "react";
import useForm from "Hooks/useForm";

import WavesTop from "Atoms/WavesTop/WavesTop";
import NewsletterTitle from "Atoms/NewsletterTitle/NewsletterTItle";
import Form from "Organism/Form/Form";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  const [form, setForm, data] = useForm({
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
      errorMessage: "Invalid email",
      touched: false,
      valid: false,
    },
  });
  const test = () => {
    console.log(data);
  };
  return (
    <section className={styles.newsletterCon} id="newsletter">
      <WavesTop color="#fff" />
      <div className={styles.contentMainCon}>
        <div className={styles.contentCon}>
          <NewsletterTitle>Sign up for newsletter</NewsletterTitle>
          <Form
            config={form}
            setConfig={setForm}
            buttonTitle="SIGN UP"
            onSubmit={test}
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
