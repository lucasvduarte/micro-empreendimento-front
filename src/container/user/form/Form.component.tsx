import { FormInput } from '../../../component/input/InputStyle';
import GridComponent from '../../../component/grid/GridComponent.component';
import { useFormik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { Form } from '../../../component/form/Form';
import User from '../interfaces/User';
import { FormInterface } from '../../../core/interfaces/form/Form';
import { Validate } from '../utils/Validate';
import ButtonForm from '../../../component/buttton/ButtonForm.component';
import { Center } from '../../../component/container/Container';
import Card from '../../../component/card/Card.component';
import { TitleName } from '../../../component/title/Title';

export default function FormComponent({ handleSubmitForm, initialValues, request }: FormInterface<User>) {

    const { handleSubmit, handleChange, values, errors, touched } = useFormik<User>({
        initialValues: initialValues,
        validationSchema: Validate(),
        onSubmit: values => {
            handleSubmitForm({ ...values });
        },
    });

    return (
        <Center height={500}>
            <GridComponent justify="center" alignItems="center" direction="column" >
                <TitleName>Meu <span>Microempreendimento</span></TitleName>
                <Card color="rgba(255,255,255,0.2)">
                    <Form onSubmit={handleSubmit}>
                        <GridComponent justify="flex-start" alignItems="flex-start" spacing={2} margin="30px 10px 20px 10px">
                            <Grid item xs={12} >
                                <FormInput
                                    label='Nome'
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    error={!!errors.password && touched.password}
                                    helperText={touched.password && errors.password}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <FormInput
                                    label='Confirma Senha'
                                    name='confirmPassword'
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    error={(values.confirmPassword !== values.password) && !!errors.confirmPassword}
                                    helperText={(values.confirmPassword !== values.password) && errors.confirmPassword}
                                />
                            </Grid>
                            <Grid item xs={12} >

                                <ButtonForm link='/login' title="Cadastrar" disabled={request} />
                            </Grid>
                        </GridComponent>
                    </Form>
                </Card>
            </GridComponent>
        </Center>
    )
}