console.log('EJERCICIO 6) Contando IPs');

function ipsInRange(ip1: string, ip2: string): number {
  let result: number = 0;
  const bytes1: string[] = ip1.split('.');
  const bytes2: string[] = ip2.split('.');

  const r1: number = parseInt(bytes2[0]) - parseInt(bytes1[0]);
  const r2: number = parseInt(bytes2[1]) - parseInt(bytes1[1]);
  const r3: number = parseInt(bytes2[2]) - parseInt(bytes1[2]);
  const r4: number = parseInt(bytes2[3]) - parseInt(bytes1[3]);
  // (r1 < 0) || (r2 < 0) ||(r3 < 0) ||(r4 < 0) 
  if (r1) {
    return -1;
  } else {
    result = r1 * 2**24 + r2 * 2**16 + r3 * 2**8 + r4;
  }
  console.log(result);
  return result;
}

console.log('Pruebas:');
console.log('ipsInRange("10.0.0.0", "10.0.0.50") == 50',
    ipsInRange('10.0.0.0', '10.0.0.50') == 50);
console.log('ipsInRange("10.0.0.0", “10.0.1.0 ”) == 256',
    ipsInRange('10.0.0.0', '10.0.1.0 ') == 256);
console.log('ipsInRange("20.0.0.10", "20.0.1.0") == 246',
    ipsInRange('20.0.0.10', '20.0.1.0') == 246);