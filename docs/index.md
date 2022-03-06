# Práctica 3 - DSI
## Tipos de datos estáticos y funciones

### Introducción

En este nuevo proyecto, con la estructura de directorios basada en las
anteriores prácticas, implementaremos 10 funciones diferentes para 
tener una primera toma de contacto con `Typescript`, concretamente con 
los apartados vistos en clase:
* [Creación de un proyecto inicial con Typescript](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-project-setup.html)
* [Tipos de datos estáticos](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-static-types.html)
* [Funciones](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-functions.html)

### Estructura de nuestro proyecto

La estructura de directorios que hemos utilizado en esta práctica ha sido:

![Imagen directorio](./images/1-estructura.png)

### Ejercicio 1 - Años bisiestos

La función devuelve un booleano indicando si el año pasado por parámetro. 
Con la definición de un año bisiesto indicada en el [pdf](https://ull-esit-inf-dsi-2122.github.io/prct03-types-functions/) de la práctica y 
el uso de un simple bloque if con esas condiciones el problema está resuelto.

```
function isLeapYear(Year: number): boolean {
  if ((Year%4 == 0) && ((Year%100 != 0) || (Year%400 == 0))) {
    return true;
  }
  return false;
}
```

### Ejercicio 2 - Notación decimal y factorial




### Ejercicio 3 - Conversor de estilo

Para el primer caso `fromSnakeToCamelCase`, empleamos el método `split` de `string` para separar
en un vector de palabras la cadena de entrada separados por `'_'`. Luego recorremos el vector y salvo
la primera palabra que va en minúscula, vamos poniendo en mayuscula la primera letra de la palabra y el
resto minuscula para ir añadiendola al final de una string resultado.

```
function fromSnakeToCamelCase(cad: string): string {
  // Get all cad's words in wordArray separated by '_'
  const wordArray: Array<string> = cad.split('_');
  let result: string = '';
  let firstChar: string = '';
  for (let i = 0; i < wordArray.length; i++) {
    if (i == 0) {
      firstChar= wordArray[i][0].toLowerCase();
    } else {
      firstChar = wordArray[i][0].toUpperCase();
    }
    const restWord: string = wordArray[i].substring(1).toLowerCase();
    result += firstChar + restWord; 
  }
  return result;
}
```
``` 
console.log('alv_rod_gOm: ', fromSnakeToCamelCase('alv_rod_gOm'))
alv_rod_gOm:  alvRodGom
```

Para el caso contrario `fromCamelToSnakeCase`, recorremos la cadena caracter a caracter comprobando si 
este está en mayúscula. En ese caso, reemplazamos el caracter por el mismo en minuscula precedido por 
una `'_'` y con la sentencia `i++` saltamos al siguiente debvido a que hemos incorporado un nuevo caracter.

```
function fromCamelToSnakeCase(cad: string): string {
  let result: string = cad;
  for (let i = 0; i < result.length; i++) {
    if (result[i] == result[i].toUpperCase()) {
      result = result.replace(result[i], ('_' + result[i].toLowerCase()));
      i++; // Avanzamos uno mas debido a añadir '_'
    }
  }
  return result;
}
```
```
console.log('alvRodGom: ', fromCamelToSnakeCase('alvRodGom'));
alvRodGom:  alv_rod_gom
```

### Ejercicio 4 - Conversor ISBN

Siguiendo las pautas y las fórmulas de la práctica:

> (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) mod 11 == 0

La función elimina los guiones '-' de la cadena de entrada y comprueba que tenga una longitud de 10.
A continuación, recorre los primeros 9 digitos convirtiendolos a enteros para luego multiplicarlos según 
la formula anterior y guardar la suma de estos valores para en el siguiente paso calcular el valor del
ultimo simbolo. Calculado este, se suma con la cantidad anterior y se obtiene el modulo 11 de ella para
comprobar si cumple la condicion de ISBN.

```
function isValidISBN(code: string): boolean {
  const cad: string = code.replace(/-/g, '');
  console.log('replace:', cad);
  if (cad.length != 10) {
    console.log('Tamaño: ', cad.length);
    return false;
  }
  let checksum: number = 0;
  for (let i = 0; i < 9; i++) {
    checksum += (parseInt(cad[i])) * (10 - i);
  }

  if (cad[9] == 'X') {
    checksum += 10;
  } else if (typeof cad[9] == 'number') {
    checksum += cad[9];
  } else {
    return false;
  }

  return ((checksum % 11) == 0)? true : false;
}
```
```
console.log('3-598-21507-X : ', isValidISBN('3-598-21507-X'));
console.log('359821507X : ', isValidISBN('359821507X'));

3-598-21507-X :  true
359821507X :  true
```

### Ejercicio 5 - Orden descendente

La solución de este problema recae sobretodo en el uso de un vector y sus metodos. En el primer bucle
separamos el numero en cada uno de sus digitos utilizando la operacion de resto para obtener el ultimo digito y la división entera para avanzar hacia el siguiente, introduciendolos en orden en el vector.

Luego empleamos el metodo `sort` del vector para ordenarlos y posteriormente recorremos el array 
multiplicando cada numero con su cifra y sumandolo al resultado para generar el numero con sus digitos
ordenados.

```
function descendente(numero: number): number {
  const numberArray: number[] = [];
  let result: number= 0;
  while (numero > 0) {
    numberArray.push(numero%10);
    numero = Math.floor(numero/10);
  }
  numberArray.sort();
  
  for (let i = 0; i < numberArray.length; i++) {
    result += numberArray[i] * 10**i;
  }
  return result;
}
```
```
console.log('76125321359: ', descendente(76125321359));
76125321359:  97655332211
```


















