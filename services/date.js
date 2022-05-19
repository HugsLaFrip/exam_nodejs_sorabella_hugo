/**
 * Imports
 */

/**
 * Exports
 */
export const formatDate = date => {
    const year = date.getFullYear();
    const month = parseInt(date.getMonth()) + 1 < 10 ? '0' + (parseInt(date.getMonth()) + 1) : parseInt(date.getMonth()) + 1;
    const day = parseInt(date.getDate()) < 10 ? '0' + (parseInt(date.getDate())) : parseInt(date.getDate());
    const hours = parseInt(date.getHours()) < 10 ? '0' + (parseInt(date.getHours())) : parseInt(date.getHours());
    const minutes = parseInt(date.getMinutes()) < 10 ? '0' + (parseInt(date.getMinutes())) : parseInt(date.getMinutes());
    const seconds = parseInt(date.getSeconds()) < 10 ? '0' + (parseInt(date.getSeconds())) : parseInt(date.getSeconds());


    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes + ':' + seconds;
}