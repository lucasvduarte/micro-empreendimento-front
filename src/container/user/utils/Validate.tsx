import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3, 'Nome muito pequeno').max(80, 'Nome muito grande').required('Nome não pode ficar em branco.'),
        email: yup.string().email('Email invalido').required('Email não pode ficar em branco.'),
        password: yup.string().trim().min(6, 'Senha muito pequena').max(60, 'Senha muito grande').required('Senha Não pode ficar em branco'),
        confirmPassword: yup.string().trim().min(6, 'Senha muito pequena').max(60, 'Senha muito grande').oneOf([yup.ref('password'), ''], 'As senhas não correspondem').required('Senha Não pode ficar em branco'),
    })
    return validations
}