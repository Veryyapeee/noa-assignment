export interface Validation {
    required?: boolean,
    minLength?: number,
    maxLength?: number,
    emailComplexity?: boolean
}

export interface ConfigInput {
    id: string,
    config: Input
}

export interface Input {
    val: string,
    type: string,
    label: string,
    validation: Validation,
    errorMessage: string,
    touched: boolean;
    valid: boolean;
}

export interface Form {
    [name: string]: Input,
}

export interface FormData {
    [name: string]: { val: string }
}