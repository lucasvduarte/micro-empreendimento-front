import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3, 'Nome muito pequeno').max(80, 'Nome muito grande').required('Nome não pode ficar em branco.'),
    })
    return validations
}