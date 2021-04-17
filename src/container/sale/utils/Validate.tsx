import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        name: yup.string().trim().min(3, 'Nome muito pequeno').max(80, 'Nome muito grande').required('Nome não pode ficar em branco.'),
        value: yup.string().required('Valor não pode ficar em branco.'),
        qtd: yup.number().required('Quantidade não pode ficar em branco.'),
    })
    return validations
}