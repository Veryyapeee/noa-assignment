import React from "react";

import Input from "Atoms/Input/Input";
import Button from "Atoms/Button/Button";

import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.formCon}>
      Form
      <Input />
      <Button />
    </div>
  );
};

export default Form;
