export const FormatDate = (date?: string | Date) => {
    if (!date) {
        return '';
    }

    let dateAux: Date = new Date(date);
    let day = dateAux.getDate() < 10 ? `0${dateAux.getDate()}` : dateAux.getDate();
    let month = dateAux.getMonth() + 1 < 10 ? `0${dateAux.getMonth() + 1}` : dateAux.getMonth() + 1;

    return `${day}/${month}/${dateAux.getFullYear()}`
}

export const FormatTimeZone = (date: string | Date | undefined) => {
    if (date) {
        let dateTimeZone: Date = new Date(date);
        dateTimeZone.setHours(dateTimeZone.getHours() - (dateTimeZone.getTimezoneOffset() / 60))
        return dateTimeZone;
    }
    return date;
}

export const FormatDateHours = (date?: string | Date) => {
    if (!date) {
        return '';
    }

    let dateAux: Date = new Date(date);
    let hours = dateAux.getHours() < 10 ? `0${dateAux.getHours()}` : dateAux.getDate();
    let min = dateAux.getMinutes() < 10 ? `0${dateAux.getMinutes()}` : dateAux.getDate();

    return `${FormatDate(date)} ${hours}:${min}h`;
}