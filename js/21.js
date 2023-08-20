//Funciones que retornan valores

function Sumar(num1, num2) {
    return num1 + num2; // este valor se le asigna a la variable resultado
}           
const resultado = Sumar(10, 10);
console.log(resultado);

let total = 0;

function agregarCarrito(precio){
    return total +=precio;

}

function impuesto(total){
    return 1.19 * total;
}

total  = agregarCarrito(200);
total  = agregarCarrito(400);
total  = agregarCarrito(600);
total  = agregarCarrito(800);

console.log(total);
const pagarImpuesto = impuesto(total);
console.log(`El total con impuesto es de: $${pagarImpuesto}`);
