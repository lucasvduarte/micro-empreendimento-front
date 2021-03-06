import { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import Sale from '../interfaces/Sale';
import { Validate } from '../utils/Validate';
import ButtonForm from '../../../component/buttton/ButtonForm.component';
import Produtc from '../../produtc/interfaces/Produtc';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { getProdutc } from '../../produtc/Produtc.service';
import { decimalEditorMonetary } from '../../../utils/format/FormatMonetary';
import { FormInterface } from '../../../core/interfaces/form/Form';

export default function FormComponent({ handleSubmitForm, initialValues, request }: FormInterface<Sale>) {

    const [produtcs, setProdutcs] = useState<Produtc[]>([]);

    useEffect(() => {
        getProdutc().then(res => {
            if (res.data) {
                setProdutcs(res.data.filter((produtc: Produtc) => produtc.qtd > 0));
            }
        });
    }, []);

    const { handleSubmit, handleChange, values, errors, touched, setFieldValue, isSubmitting } = useFormik<Sale>({
        initialValues: initialValues,
        onSubmit: values => {
            console.log('values')
            values.value = String(values.value).includes(',') ? (values.value.replace(',', '')) : values.value;
            handleSubmitForm(values)
        },
    });

    return (
        <Form onSubmit={handleSubmit}>
            <GridComponent justify="flex-start" alignItems="flex-start" spacing={2} >
                <Grid item xs={12} >
                    <Autocomplete
                        fullWidth
                        noOptionsText='Não encontrado um produto com esse nome'
                        onChange={(_event: React.ChangeEvent<any>, produtc: Produtc | null) => {
                            setFieldValue('product', produtc)
                        }}
                        value={values.product}
                        id="product-autocomplete"
                        options={produtcs}
                        getOptionLabel={(produtc: Produtc) => produtc.name}
                        renderInput={(params) => <FormInput {...params} label="Produto" />}
                        disabled={values._id ? true : false}
                    />
                </Grid>
                <Grid item xs={12} >
                    <FormInput
                        label={`Valor da venda produto`}
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
                        label={`Quantidade do produto`}
                        name='qtd'
                        type='number'
                        value={values.qtd}
                        onChange={handleChange('qtd')}
                        error={!!errors.qtd && touched.qtd}
                        helperText={touched.qtd && errors.qtd}
                    />
                </Grid>
                <Grid item xs={12}  >
                    <ButtonForm link='/venda' title="Salvar" disabled={isSubmitting && request} />
                </Grid>
            </GridComponent>

        </Form>
    )
}