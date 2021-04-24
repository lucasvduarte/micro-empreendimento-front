import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import CorporateCommunicated from '../interfaces/User';
import { FormInterface } from '../interfaces/Form';
import { Validate } from '../utils/Validate';
import Button from '../../../component/buttton/Button.component';
import { Center } from '../../../component/container/Container';

export default function FormComponent({ handleSubmitForm, initialValues, request }: FormInterface) {

    const { handleSubmit, handleChange, values, errors, touched } = useFormik<CorporateCommunicated>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: values => {
            handleSubmitForm && handleSubmitForm(values)
        },
    });

    return (
        <Center height={320}>
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
                            label='Email'
                            name='email'
                            value={values.email}
                            type="email"
                            onChange={handleChange('email')}
                            error={!!errors.email && touched.email}
                            helperText={touched.email && errors.email}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <FormInput
                            label='Senha'
                            name='password'
                            type='password'
                            value={values.password}
                            onChange={handleChange('password')}
                            error={!!errors.password && touched.password}
                            helperText={touched.password && errors.password}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button title="Cadastrar" />
                    </Grid>
                </GridComponent>
            </Form>
        </Center>
    )
}