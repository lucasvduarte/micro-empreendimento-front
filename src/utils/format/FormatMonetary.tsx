/* export const valueMonetary = (value: string) => {
    value = value.replace(/\D/g, "");
    //   value = Number(value.replace(',', '.')).toFixed(2).replace('.', '.');
    value = Number(value).toFixed(2).replace(',', '.')
    console.log(value)
    value = `${parseFloat(value).toLocaleString('pt-BR')}`;
      value = value.toString();
    if (value === '0,00' || !value) {
        return '0,00'
    }
    value = value.replace(/\D/g, "");
    value = String((Number(value)).toFixed(2));
    value = value.replace(",", ".");
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')  
return value;
} */
export const valueMonetary = (value: number): string => {
    let valueAux: string = value.toFixed(2).replace('.', '.');

    return `${parseFloat(valueAux).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} `;
}