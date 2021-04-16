import { Span } from './MandatoryFieldSignaling';

interface Props {
    title?: string;
    required?: boolean;
}

export default function MandatoryFieldSignaling({ title, required }: Props) {

    return (
        <>
            {title}
            {required && <Span style={{ color: 'red' }}> *</Span>}
        </>
    );
}