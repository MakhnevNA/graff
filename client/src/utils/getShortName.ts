export const getShortName = (name: string, surname: string) => {
    return `${name.split('')[0]}${surname.split('')[0]}`;
};
