"use strict";
console.log('EJERCICIO 3) Conversor de estilo');
function fromSnakeToCamelCasel(cad) {
    // Get all cad's words in wordArray
    const wordArray = cad.split('_');
    let result = '';
    let firstChar = '';
    for (let i = 0; i < wordArray.length; i++) {
        if (i == 0) {
            firstChar = wordArray[i][0].toLowerCase();
        }
        else {
            firstChar = wordArray[i][0].toUpperCase();
        }
        const restWord = wordArray[i].substring(1).toLowerCase();
        result += firstChar + restWord;
    }
    return result;
}
function fromCamelToSnakeCase(cad) {
    // Get all cad's words in wordArray
    const wordArray = cad.split('_');
    let result = '';
    for (let i = 0; i < wordArray.length; i++) {
        const firstChar = wordArray[i][0].toUpperCase();
        const restWord = wordArray[i].substring(1).toLowerCase();
        result += firstChar + restWord;
    }
    return result;
}
console.log('Pruebas:');
console.log('alv_rod_gOm: ', fromSnakeToCamelCasel('alv_rod_gOm'));
console.log('AlvRodGom: ', fromCamelToSnakeCase('AlvRodGom'));
