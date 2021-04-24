import IFormInput from './User';

export interface FormInterface {
    handleSubmitForm?(event: IFormInput): void;
    initialValues: IFormInput;
    request?: boolean;
}