import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import CorporateCommunicated from '../interfaces/Produtc';
import { FormInterface } from '../interfaces/Form';
import { Validate } from '../utils/Validate';
import ButtonForm from '../../../component/buttton/ButtonForm.component';
import { valueMonetary } from '../../../utils/format/FormatMonetary';

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
                <Grid item xs={12} >
                    <FormInput
                        label='Valor do produto'
                        name='value'
                        value={values.value}
                        placeholder="00,00"
                        inputProps={{ maxLength: 11 }}
                        onChange={handleChange('value')}
                        error={!!errors.value}
                        helperText={errors.value}
                    />
                </Grid>
                <Grid item xs={12} >
                    <FormInput
                        label='Quantidade do produto'
                        name='qtd'
                        value={values.qtd}
                        onChange={handleChange('qtd')}
                        error={!!errors.qtd}
                        helperText={errors.qtd}
                    />
                </Grid>
                <ButtonForm link='/produto' title="Salvar" />
            </GridComponent>

        </Form>
    )
}