console.log('EJERCICIO 3) Conversor de estilo');

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

console.log('Pruebas:');
console.log('3-598-21507-X : ', isValidISBN('3-598-21507-X'));
console.log('359821507X : ', isValidISBN('359821507X'));