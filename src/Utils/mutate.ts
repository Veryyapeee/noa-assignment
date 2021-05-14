/* Mutate state
  @param {value} - input current value
  @param {inputType} - type of input which is object key in state
  @params {stateCopy} - state
  @param {valid} - value which represents validity of current input
*/
export const mutateState = (
    value: string,
    inputType: string,
    stateCopy: any,
    validity: boolean,
) => {

    return {
        ...stateCopy,
        [inputType]: {
            ...stateCopy[inputType],
            valid: validity,
            touched: value !== "",
        },
    };
};

// Mutate form data to object: val format
export const mutateFormData = (state: any) => {
    const formData: any = {};
    let key: keyof typeof state;
    for (key in state) {
        formData[key] = state[key].val;
    }
    return formData;
}
