// Object Methods
//"use strict" // correr js en modo estricto

const Producto = {
    NombreProducto : "Gpu Amd",
    Precio : 399990,
    Disponible : true
}

Object.freeze(Producto); //para no agregar mas valores ni modificarlo

Producto.Imagen = 'imagen.jpg'

console.log(Object.isFrozen(Producto));

console.log(Producto);
