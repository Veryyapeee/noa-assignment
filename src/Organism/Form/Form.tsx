import React, { useEffect, useState } from "react";

import Input from "Atoms/Input/Input";
import Button from "Atoms/Button/Button";

import onChangeForm from "Utils/onChangeForm";
import { wholeFormValidity } from "Utils/validation";

import styles from "./Form.module.scss";

interface Props {
  config: any;
  setConfig: any;
  buttonTitle: string;
  onSubmit: () => void;
}

type E = React.FormEvent<HTMLFormElement>;

const Form: React.FC<Props> = (props) => {
  // State for valid form and temp state to deal with async useState
  const [validForm, setValidForm] = useState<boolean>(
    wholeFormValidity(props.config)
  );
  const [state, setState] = useState<any>(props.config);

  // Refresh state to update sync
  useEffect(() => {
    setState(props.config);
  }, [props.config, state]);

  // Get input config
  let key: string;
  let elements = [];
  for (key in state) {
    elements.push({
      id: key,
      name: key,
      config: state[key],
    });
  }

  // Function for mutate, validate and return new state when change input value
  const onChangeInput = (
    event: { target: HTMLInputElement },
    inputType: string
  ) => {
    setValidForm(onChangeForm(event, inputType, state, props.setConfig));
  };

  // Create inputs for form
  let formElements = elements.map((input: any) => (
    <Input
      key={input.id}
      onChangeInput={(e: { target: HTMLInputElement }) =>
        onChangeInput(e, input.id)
      }
      inputName={input.name}
      {...input.config}
      stateMain={state}
    />
  ));

  return (
    <div className={styles.formCon}>
      <form
        onSubmit={(event: E) => {
          event.preventDefault();
          props.onSubmit();
        }}
        className={styles.form}
      >
        <div>{formElements}</div>
        <Button disabled={!validForm}>{props.buttonTitle}</Button>
      </form>
    </div>
  );
};

export default Form;
