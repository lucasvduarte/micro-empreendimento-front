import { FontBold } from './FontBold';
import { Container } from '../container/Container';

interface Props {
    title?: string;
    subTitle?: string;
}

const FontBoldComponent = ({ subTitle, title }: Props) => {

    return (
        <Container >
            <FontBold>{title?.toLocaleUpperCase()}</FontBold>
            {subTitle?.toLocaleUpperCase()}
        </Container>
    )
}

export default FontBoldComponent;
