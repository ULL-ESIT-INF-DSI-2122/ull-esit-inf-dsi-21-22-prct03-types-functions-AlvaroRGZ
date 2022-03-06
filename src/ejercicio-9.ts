console.log('EJERCICIO 9) Conversor romano a decimal y viceversa');

function rToD(r: string): number {
  let d: number = 0;
  switch (r) {
    case 'I': d = 1;
      break;
    case 'V': d = 5;
      break;
    case 'X': d = 10;
      break;
    case 'L': d = 50;
      break;
    case 'C': d = 100;
      break;
    case 'D': d = 500;
      break;
    case 'M': d = 1000;
      break;
    default:
      break;
  }
  return d;
}

function romaToDecimal(romano: string): number {
  let resultado: number = 0;
  let anterior: number = 0;
  for (let i = 0; i < romano.length; i++) {
    const valor: number = rToD(romano[i]);
    resultado += valor;
    if (anterior < valor) {
      resultado -= anterior * 2;
    }
    anterior = valor;
  }
  return resultado;
}


function decimalToRoman(numero: number): string {
  return 'f';
}

console.log('Pruebas:');
console.log('MCMXCV = ', romaToDecimal('MCMXCV'));
console.log('MMXIV = ', romaToDecimal('MMXIV'));