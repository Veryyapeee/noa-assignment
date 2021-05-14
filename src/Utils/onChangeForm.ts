import { Dispatch, SetStateAction } from "react";
import { validation, wholeFormValidity } from './validation';
import { mutateState } from './mutate';
import { Form } from 'Utils/types';

/* Main onChange action creator
    @param {e} - event target
    @param {inputType} - type of the input which represents key in an object
    @param {state} - state
    @param {checkPass} - boolean value to pass if we have to check if passwords are matching
*/
const OnChangeForm = (e: { target: HTMLInputElement }, inputType: string, state: Form, setState: Dispatch<SetStateAction<Form>>): boolean => {

    // Make state copy with new value
    const stateCopy = {
        ...state, [inputType]: {
            ...state[inputType],
            val: e.target.value
        }
    };

    // Run validation and update functions
    const valid: boolean = validation(e.target.value, stateCopy[inputType].validation);
    const updatedFields: Form = mutateState(e.target.value, inputType, stateCopy, valid);
    const validForm: boolean = wholeFormValidity(updatedFields);

    // Set new state
    setState(updatedFields);

    // Return state of form validity
    return validForm;
}

export default OnChangeForm;