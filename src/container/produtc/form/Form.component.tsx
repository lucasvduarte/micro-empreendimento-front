import { ChangeEvent } from 'react';
import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import Produtc from '../interfaces/Produtc';
import { FormInterface } from '../../../core/interfaces/form/Form';
import { Validate } from '../utils/Validate';
import ButtonForm from '../../../component/buttton/ButtonForm.component';
import { decimalEditorMonetary } from '../../../utils/format/FormatMonetary';

export default function FormComponent({ handleSubmitForm, initialValues, request }: FormInterface<Produtc>) {

    const { handleSubmit, handleChange, values, errors, touched, setFieldValue, isSubmitting } = useFormik<Produtc>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: values => {
            values.value = String(values.value).includes(',') ? (values.value.replace(',', '')) : values.value;
            handleSubmitForm(values);
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
                        error={(values.name.length < 3) && !!errors.name && touched.name}
                        helperText={(values.name.length < 3 && touched.name) && errors.name}
                    />
                </Grid>
                <Grid item xs={12} >
                    <FormInput
                        label='Valor do produto'
                        name='value'
                        value={decimalEditorMonetary(values.value)}
                        placeholder="0.00"
                        inputProps={{ maxLength: 11 }}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue('value', decimalEditorMonetary(e.target.value))}
                        error={!!errors.value && touched.value}
                        helperText={touched.value && errors.value}
                    />
                </Grid>
                <Grid item xs={12} >
                    <FormInput
                        label='Quantidade do produto'
                        name='qtd'
                        type='number'
                        value={values.qtd}
                        onChange={handleChange('qtd')}
                        error={!!errors.qtd && touched.qtd}
                        helperText={touched.qtd && errors.qtd}
                    />
                </Grid>
                <ButtonForm link='/estoque' title="Salvar" disabled={isSubmitting && request} />
            </GridComponent>

        </Form>
    )
}