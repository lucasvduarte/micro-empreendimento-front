import { FormInput } from '../../../component/input/InputStyle';
import Grid from '@material-ui/core/Grid';
import GridComponent from '../../../component/grid/GridComponent.component';
import Login from '../interfaces/Login';
import { INITIAL_VALUES } from '../utils/INITIAL_VALUES';
import { useFormik } from 'formik';
import { FormProps } from '../interfaces/Form';
import Button from '../../../component/buttton/Button.component';

export default function Form({ handleSubmitForm, request }: FormProps) {

    const { handleSubmit, handleChange, isSubmitting } = useFormik<Login>({
        initialValues: INITIAL_VALUES,
        onSubmit: values => {
            handleSubmitForm(values);
        },
    });

    return (
        <form onSubmit={handleSubmit}>
            <GridComponent justify="center" alignItems="center" spacing={2} >
                <Grid item xs={12}  >
                    <FormInput
                        label='Email'
                        name="email"
                        type="email"
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}  >
                    <FormInput
                        label='Senha'
                        type="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <Grid item xs={12}  >
                    <Button title="Entrar" fullWidth size="medium" disabled={isSubmitting && request} />
                </Grid>
            </GridComponent>
        </form>
    )
}