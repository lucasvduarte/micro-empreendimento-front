import Search from './Search';

export interface FormProps {
    handleSubmitForm(event: Search): void;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
    initialValues: Search;
}