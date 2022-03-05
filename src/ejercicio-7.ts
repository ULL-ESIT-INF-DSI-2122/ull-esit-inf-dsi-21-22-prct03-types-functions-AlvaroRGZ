console.log('EJERCICIO 7) Wonder woman');

function wonderWoman(heads: number, n: number, atack: number): number {
  let newheads: number = n;
  let j: number = 1;
  for (let i = 1; i <= atack; i++) {
    heads--;
    j=1;
    while (j <= i) {
      newheads *= j;
      j++;
    }
    heads += newheads;
    newheads = n;
  }
  return heads;
}

console.log('Pruebas:');
console.log('h: 2 n: 1  a: 1 = ', wonderWoman(2, 1, 1));
console.log('h: 5 n: 10 a: 3 = ', wonderWoman(5, 10, 3));