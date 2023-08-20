const Producto = {
    NombreProducto : "Gpu Amd",
    Precio : 399990,
    Disponible : true
}

//forma anterior

//const PrecioProducto = Producto.Precio;
//const NombreProducto = Producto.NombreProducto;

//console.log(PrecioProducto);
//console.log(NombreProducto);

//Ahora Destructuring Object

const {Precio, NombreProducto, Disponible} = Producto;
//const {NombreProducto} = Producto;

console.log(Precio);
console.log(NombreProducto);
console.log(Disponible);
