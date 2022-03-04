"use strict";
console.log('EJERCICIO 1) AÑOS BISIESTOS');
/**
 * Returns true or false if the year is leap or not.
 * @param {int} Year year.
 * @return {boolean} If the year is leap or not.
 */
function isLeapYear(Year) {
    if ((Year % 4 == 0) && ((Year % 100 != 0) || (Year % 400 == 0))) {
        return true;
    }
    return false;
}
console.log('Pruebas:');
console.log('1997: ', isLeapYear(1997));
console.log('1996: ', isLeapYear(1996));
console.log('1900: ', isLeapYear(1900));
console.log('2000: ', isLeapYear(2000));
