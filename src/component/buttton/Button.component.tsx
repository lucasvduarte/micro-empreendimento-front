import Button from '@material-ui/core/Button';
import { ButtonInterface } from './interface/Button';
import { Container } from '../container/Container';

export default function ButtonComponent({ title, type, size, disabled, onClick, fullWidth, color, icon, margin, variant }: ButtonInterface) {

    return (
        <Container margin={margin}>
            <Button type={type || 'submit'}
                size={size || 'small'}
                variant={variant || 'contained'}
                color={color || 'primary'}
                onClick={onClick}
                fullWidth={fullWidth || false}
                disabled={disabled || false}
                startIcon={icon}
            >
                {title.toLocaleUpperCase()}
            </Button>
        </Container>
    );
}
