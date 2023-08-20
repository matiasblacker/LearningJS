// POO

//Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 25000
}
//Object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}
function Cliente(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}
Cliente.prototype.FormatClient = function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

//Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.FormatProduct = function() {
    return `El producto ${producto.nombre} tiene el precio de: $ ${producto.precio}`;
}

const producto2 = new Producto('TV 4k de 65"', 450000);
const producto3 = new Producto('Laptop Gamer', 800000);

console.log(producto2);
console.log(producto3);
console.log(FormatProduct(producto2));

