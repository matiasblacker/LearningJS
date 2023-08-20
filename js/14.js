//Uniendo objetos
const Producto = {
    NombreProducto : "Gpu Amd",
    Precio : 399990,
    Disponible : true
}

const Medidas = {
    Peso : '1kg',
    Medida : '1m'
}

const NuevoProducto = { ...Producto, ...Medidas };

console.log(Producto);
console.log(NuevoProducto);
