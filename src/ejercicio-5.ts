console.log('EJERCICIO 5) Orden descendente');

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

console.log('Pruebas:');
console.log('76125321359: ', descendente(76125321359));