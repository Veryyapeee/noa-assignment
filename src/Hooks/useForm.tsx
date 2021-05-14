import { Dispatch, SetStateAction, useState } from "react";

import { mutateFormData } from "Utils/mutate";

const useForm = (state: any): [any, Dispatch<SetStateAction<any>>, any] => {
  const [form, setForm] = useState<any>(state);
  const data: any = mutateFormData(form);
  return [form, setForm, data];
};

export default useForm;
