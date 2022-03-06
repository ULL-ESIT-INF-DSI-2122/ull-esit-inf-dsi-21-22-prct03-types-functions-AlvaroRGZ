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
