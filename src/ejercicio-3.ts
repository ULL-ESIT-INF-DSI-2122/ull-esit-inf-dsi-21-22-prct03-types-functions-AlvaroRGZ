console.log('EJERCICIO 3) Conversor de estilo');

function fromSnakeToCamelCasel(cad: string): string {
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

function fromCamelToSnakeCase(cad: string): string {
  // Get all cad's words in wordArray
  const wordArray: Array<string> = cad.split('_');
  let result: string = '';
  
  for (let i = 0; i < wordArray.length; i++) {
    const firstChar: string = wordArray[i][0].toUpperCase();
    const restWord: string = wordArray[i].substring(1).toLowerCase();
    result += firstChar + restWord; 
  }
  
  return result;
}

console.log('Pruebas:');
console.log('alv_rod_gOm: ', fromSnakeToCamelCasel('alv_rod_gOm'));
console.log('AlvRodGom: ', fromCamelToSnakeCase('AlvRodGom'));