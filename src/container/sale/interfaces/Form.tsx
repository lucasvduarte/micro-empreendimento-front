import IFormInput from './Sale';

export interface FormInterface {
    handleSubmitForm?(event: IFormInput): void;
    initialValues: IFormInput;
    request?: boolean;
}