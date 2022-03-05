console.log('EJERCICIO 8) Entredador pokemon');

type pokemonType = 'agua' | 'hierba' | 'fuego' | 'electrico'

function dañoEfectivo(tAtack: pokemonType, tDefend: pokemonType,
    ataque: number, defensa: number): number {
  let efectividad: number = 0;
  const fuerteContraAgua: pokemonType[] = ['hierba', 'electrico'];
  const debilContraAgua: pokemonType[] = ['fuego'];

  const fuerteContraFuego: pokemonType[] = ['agua'];
  const debilContraFuego: pokemonType[] = ['hierba'];

  const fuerteContraElectrico: pokemonType[] = [];
  const debilContraElectrico: pokemonType[] = ['agua'];

  const fuerteContraHierba: pokemonType[] = ['fuego'];
  const debilContraHierba: pokemonType[] = ['agua'];
  
  if (tAtack == tDefend) {
    return 50 * (ataque / defensa) * 0.5;
  }

  switch (tAtack) {
    case 'agua': {
      if (fuerteContraAgua.includes(tDefend)) {
        efectividad = 0.5;
      } else if (debilContraAgua.includes(tDefend)) {
        efectividad = 2;
      } else {
        efectividad = 1;
      } 
    }
    case 'fuego': {
      if (fuerteContraFuego.includes(tDefend)) {
        efectividad = 0.5;
      } else if (debilContraFuego.includes(tDefend)) {
        efectividad = 2;
      } else {
        efectividad = 1;
      } 
    }
    case 'electrico': {
      if (fuerteContraElectrico.includes(tDefend)) {
        efectividad = 0.5;
      } else if (debilContraElectrico.includes(tDefend)) {
        efectividad = 2;
      } else {
        efectividad = 1;
      } 
    }
    case 'hierba': {
      if (fuerteContraHierba.includes(tDefend)) {
        efectividad = 0.5;
      } else if (debilContraHierba.includes(tDefend)) {
        efectividad = 2;
      } else {
        efectividad = 1;
      } 
    }
  }   
  return 50 * (ataque / defensa) * efectividad;
}

console.log('Pruebas:');
console.log('agua vs fuego | a: 20 d: 40 = ',
    dañoEfectivo('agua', 'fuego', 20, 40));
console.log('hierba vs electrico | a: 10 d: 30 = ',
    dañoEfectivo('hierba', 'electrico', 10, 30));
console.log('fuego vs fuego | a: 20 d: 60 = ',
    dañoEfectivo('fuego', 'fuego', 20, 60));