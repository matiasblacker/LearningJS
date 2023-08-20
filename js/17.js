// Más metodos de Arrays
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

console.table(Carrito);
console.table(Carrito[1]);

//Some
//para un arreglo de objetos como el carrito de compras

Resultado = Carrito.some(function(producto){
    return producto.Nombre === 'SSD M.2 512GB RGB ADATA';
});

//console.log(Resultado);

// Reduce

Resultado = Carrito.reduce(function(total, producto){
    return total + producto.Precio
}, 0); //valor inicial osea 0 del Array

//console.log(Resultado);

//Filter

Resultado = Carrito.filter(function(producto){
    return producto.Precio > 250000  
}); // trae todos los producto que tiene un valor arriba de
Resultado = Carrito.filter(function(producto){
    return producto.Nombre !== 'Monitor 50"'  
}); // trae todos los productos que son distintos al nombre ingresado
console.log(Resultado);

const Meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
//forEach
Meses.forEach(function(mes){
    if(mes =='marzo'){
        console.log('El mes existe');
    }
});

//includes
//para un arrelo plano como el de meses
const result = Meses.includes('marzo');
//console.log(result);

