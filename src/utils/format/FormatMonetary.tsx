export const decimalEditorMonetary = (value: number | string) => {
    value = value.toString();

    if (value === '0.00' || !value) {
        return '0.00'
    }

    if (!value.includes('.')) {
        value = value + '.00'
    }

    value = value.replace(/\D/g, "");

    value = (parseInt(value) / 100).toFixed(2) + '';
    value = value.replace(",", ".");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return value;
}

export const valueMonetary = (value: number): string => {
    let valueAux: string = value.toFixed(2).replace('.', '.');

    return `${parseFloat(valueAux).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} `;
}