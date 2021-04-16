import Login from './Login';

export interface FormProps {
    handleSubmitForm(event: Login): void;
    onClick?(event: React.MouseEvent<HTMLElement, MouseEvent>): void;
    request?: boolean;
}