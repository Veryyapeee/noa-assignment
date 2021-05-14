import React from "react";

import styles from "./Input.module.scss";

interface Props {
  type: string;
  inputType: string;
  val: string;
  inputName: string;
  placeholder: string;
  label: string;
  valid: boolean;
  touched: boolean;
  stateMain: any;
  onChangeInput: () => void;
  errorMessage: string;
}

const Input: React.FC<Props> = (props) => {
  // Mutate input classes if field is invalid
  let inputClasses: string[] = [styles.inputContainer];
  if (!props.valid && props.touched) {
    inputClasses = [styles.inputContainer, styles.invalidInput];
  }

  // Generate input
  const input = (
    <div className={styles.container}>
      <label className={inputClasses.join(" ")}>
        <input
          className={styles.input}
          type={props.type}
          value={props.val}
          onChange={props.onChangeInput}
          required
        />
        <span className={styles.label}>{props.label}</span>
      </label>
      {!props.valid && props.touched && props.errorMessage && (
        <span className={styles.inputErrorMessage}>{props.errorMessage}</span>
      )}
    </div>
  );

  return <>{input}</>;
};

export default Input;
