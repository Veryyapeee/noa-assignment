import { Validation, Form } from 'Utils/types';

/* Input data validation 
  @param {value} - input value
  @param {rules} - object with validation rules
*/
export const validation = (value: string, rules?: Validation) => {
    let isValid: boolean | null = true;
    if (!rules) {
        return true;
    }
    if (rules.required) {
        isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid;
    }

    if (rules.emailComplexity) {
        // Test valid email
        isValid = value.match(/\S+@\S+\.\S+/) && isValid;
        // Check for white spaces
        isValid = !/\s/.test(value) && isValid;
        console.log(isValid);
    }

    return isValid === null ? false : isValid;
};


/* Check if every input is valid
  @param {fields} - object with all form fields
*/
export const wholeFormValidity = (fields: Form) => {
    let key: keyof typeof fields;
    for (key in fields) {
        if (fields[key].valid === false) {
            return false;
        }
    }
    return true;
};