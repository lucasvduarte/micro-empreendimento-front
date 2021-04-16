import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import CorporateCommunicated from '../interfaces/Produtc';
import { FormInterface } from '../interfaces/Form';
import { Validate } from '../utils/Validate';
import ButtonForm from '../../../component/buttton/ButtonForm.component';

export default function FormComponent({ handleSubmitForm, initialValues, request }: FormInterface) {

    const { handleSubmit, handleChange, values, errors } = useFormik<CorporateCommunicated>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: values => {
            handleSubmitForm && handleSubmitForm(values)
        },
    });

    return (
        <Form onSubmit={handleSubmit}>
            <GridComponent justify="flex-start" alignItems="flex-start" spacing={2} >
                <Grid item xs={12} >
                    <FormInput
                        label='Nome'
                        name='name'
                        value={values.name}
                        onChange={handleChange('name')}
                        error={(values.name.length < 3) && !!errors.name}
                        helperText={(values.name.length < 3) && errors.name}
                    />
                </Grid>
                <ButtonForm link='/produto' title="Salvar" />
            </GridComponent>

        </Form>
    )
}