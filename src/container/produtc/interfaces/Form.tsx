import IFormInput from './Produtc';

export interface FormInterface {
    handleSubmitForm(event: IFormInput): void;
    initialValues: IFormInput;
    request?: boolean;
}