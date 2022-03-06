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
en un vector de palabras la cadena de entrada separados por `'-'`. Luego recorremos el vector y salvo
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
console.log('alv_rod_gOm: ', fromSnakeToCamelCase('alv_rod_gom'))
alv_rod_gOm:  alvRodGom
```










