"use strict";
console.log('EJERCICIO 3) Conversor de estilo');
function fromSnakeToCamelCase(cad) {
    // Get all cad's words in wordArray separated by '_'
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
    let result = cad;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == result[i].toUpperCase()) {
            result = result.replace(result[i], ('_' + result[i].toLowerCase()));
            i++; // Avanzamos uno mas debido a añadir '_'
        }
    }
    return result;
}
console.log('Pruebas:');
console.log('alv_rod_gOm: ', fromSnakeToCamelCase('alv_rod_gom'));
console.log('alvRodGom: ', fromCamelToSnakeCase('alvRodGom'));
