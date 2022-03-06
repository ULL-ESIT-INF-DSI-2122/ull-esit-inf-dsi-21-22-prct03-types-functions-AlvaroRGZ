console.log('EJERCICIO 2) Notacion decimal y factorial');

const leyenda: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
function decimalToFactorial(numero: number): string {
  let sb: string = '0';
  for (let i: number = 2; numero > 0;) {
    sb += (leyenda.charAt((numero % i)));
    numero = Math.floor(numero /= i++);
  }
  const v: string[] = sb.split('');
  return v.reverse().toString().replace(/,/g, '');
}

function factorialToDecimal(cad: string): number {
  let acumulador: number = 0;
  let multiplo: number = 1;
  const j: number = 0;
  for (let i: number = 0, j = cad.length - 1; j >= 0; i++, j--) {
    if (i > 1) {
      multiplo *= i;
    }
    acumulador += multiplo * leyenda.indexOf(cad.charAt(j));
  }
  return acumulador;
}

console.log('Pruebas:');
console.log('463: ', decimalToFactorial(463), ' vs 341010');
console.log('341010: ', factorialToDecimal('341010'), ' vs 463');