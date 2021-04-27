import * as yup from 'yup';

export const Validate = () => {
    let validations = yup.object().shape({
        //productId: yup.string().trim().required('Produto não pode ficar em branco.'),
        value: yup.string().required('Valor não pode ficar em branco.'),
        qtd: yup.number().required('Quantidade não pode ficar em branco.'),
    })
    return validations
}