console.log('EJERCICIO 10) Distancia de Manhattan');

type coordenada = number[];

function manhattan(c1: coordenada, c2: coordenada): number {
  let resultado: number = 0;

  if (c1.length != c2.length) {
    console.log('Coordenadas con dimensiones diferentes. Error');
    return -1;
  }

  for (let i = 0; i < c1.length; i++) {
    resultado += Math.abs(c1[i] - c2[i]);
  }
  return resultado;
}

console.log('Pruebas:');
console.log('[1, 3], [4, 10]: ', manhattan([1, 3], [4, 10]));
console.log('[1, 1], [1, 1]: ', manhattan([1, 1], [1, 1]));
console.log('[-1, 3, 7], [-5, 8, 7]: ', manhattan([-1, 3, 7], [-5, 8, 7]));
console.log('[-1, 3], [-5, 8, 7]: ', manhattan([-1, 3], [-5, 8, 7]));