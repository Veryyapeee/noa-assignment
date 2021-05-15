import React, { useEffect, useState, SetStateAction, Dispatch } from "react";

import Input from "Molecules/Input/Input";
import Button from "Atoms/Button/Button";

import onChangeForm from "Utils/onChangeForm";
import { wholeFormValidity } from "Utils/validation";

import styles from "./Form.module.scss";

import { Form, ConfigInput } from "Utils/types";
interface Props {
  config: Form;
  setConfig: Dispatch<SetStateAction<Form>>;
  buttonTitle: string;
  onSubmit: () => void;
}

type E = React.FormEvent<HTMLFormElement>;

const FormEl: React.FC<Props> = (props) => {
  // State for valid form and temp state to deal with async useState
  const [validForm, setValidForm] = useState<boolean>(
    wholeFormValidity(props.config)
  );
  const [state, setState] = useState<Form>(props.config);

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
  let formElements = elements.map((input: ConfigInput) => (
    <Input
      key={input.id}
      onChangeInput={(e: { target: HTMLInputElement }) =>
        onChangeInput(e, input.id)
      }
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

export default FormEl;
