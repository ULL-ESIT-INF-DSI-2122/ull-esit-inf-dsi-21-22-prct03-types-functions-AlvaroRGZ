"use strict";
console.log('EJERCICIO 6) Contando IPs');
function ipsInRange(ip1, ip2) {
    let result1 = 0;
    let result2 = 0;
    const bytes1 = ip1.split('.');
    const bytes2 = ip2.split('.');
    result1 = parseInt(bytes1[0]) * 2 ** 24 +
        parseInt(bytes1[1]) * 2 ** 16 +
        parseInt(bytes1[2]) * 2 ** 8 +
        parseInt(bytes1[3]);
    result2 = parseInt(bytes2[0]) * 2 ** 24 +
        parseInt(bytes2[1]) * 2 ** 16 +
        parseInt(bytes2[2]) * 2 ** 8 +
        parseInt(bytes2[3]);
    return result2 - result1;
}
console.log('Pruebas:');
console.log('ipsInRange("10.0.0.0", "10.0.0.50") == 50', ipsInRange('10.0.0.0', '10.0.0.50') == 50);
console.log('ipsInRange("10.0.0.0", “10.0.1.0 ”) == 256', ipsInRange('10.0.0.0', '10.0.1.0 ') == 256);
console.log('ipsInRange("20.0.0.10", "20.0.1.0") == 246', ipsInRange('20.0.0.10', '20.0.1.0') == 246);
