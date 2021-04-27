import { FormInput } from '../../../component/input/InputStyle';
import Grid from '@material-ui/core/Grid';
import GridComponent from '../../../component/grid/GridComponent.component';
import Login from '../interfaces/Login';
import { useFormik } from 'formik';
import Button from '../../../component/buttton/Button.component';
import { FormInterface } from '../../../core/interfaces/form/Form';

export default function Form({ handleSubmitForm, request, initialValues }: FormInterface<Login>) {

    const { handleSubmit, handleChange, isSubmitting } = useFormik<Login>({
        initialValues: initialValues,
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