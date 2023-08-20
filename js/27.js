// ForEach  solo para usar en arrays

const Carrito = [
    {Nombre: 'Monitor 50"', Precio: 250000 },
    {Nombre: 'GPU AMD RX7900', Precio: 750000 },
    {Nombre: 'Memorias RAM RGB ADATA', Precio: 40000 },
    {Nombre: 'SSD M.2 1TB RGB ADATA', Precio: 70000 },
    {Nombre: 'SSD M.2 512GB RGB ADATA', Precio: 40000 },
    {Nombre: 'CPU INTEL XEON E2690', Precio: 30000 },
    {Nombre: 'Water Cooling 240mm Soplay', Precio: 27000 },
    {Nombre: 'Gabinete Deepcool', Precio: 50000 },
    {Nombre: 'Fuente de poder EVGA 700W 80 Plus', Precio: 30000 }
]; 

Carrito.forEach( producto => console.log(producto.Nombre)); // para listar en consola el array
// Map
const array2 = Carrito.map( producto => `${producto.Nombre} - ${producto.Precio}`); //para crear un nuevo array
console.log(array2);