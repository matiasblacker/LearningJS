// strings o cadenas de texto

const producto = "Monitor 23,8 pulgadas";
const producto2 = String('Monitor 24 pulgadas');
const producto3 = new String('Monitor 27 pulgadas');
const tweet = "Aqui estoy por fin aprendiendo JavaScript";

// length es para contacar la extension del string
console.log(producto.length);
console.log(producto2);
console.log(producto3);
//indeOf para encontrar un elementro dentro del String
//-1 si no la encuentra 
console.log(tweet.indexOf('fin'));
//includes retorna true o false
console.log(tweet.includes('fin'));