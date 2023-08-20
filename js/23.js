//Arrow functions

const Sumar = (n1, n2) => console.log(n1 + n2);
Sumar(2, 10);


const Aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
// cuando hay un parametro se peude eliminar los ()
Aprendiendo('JS');


// Más metodos de Arrays
const Meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

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


//forEach
Meses.forEach(mes =>{
    if(mes =='marzo'){
        console.log(`El mes ${mes} existe`);
    }
});

//includes
//para un arrelo plano como el de meses
//const result = Meses.includes('marzo');
//console.log(result);

//Some
//para un arreglo de objetos como el carrito de compras

let Resultado;
Resultado = Carrito.some(producto => producto.Nombre === 'SSD M.2 512GB RGB ADATA');
//busca en la lista el producto
console.log(Resultado);

// Reduce
Resultado = Carrito.reduce((total, producto)=>{
    return total + producto.Precio
}, 0); //valor inicial osea 0 del Array

console.log(`El total del carrito es: ${Resultado}`);

//Filter
Resultado = Carrito.filter(producto => producto.Precio > 250000); 
// trae todos los producto que tiene un valor arriba de
console.log(Resultado);

Resultado = Carrito.filter(producto => producto.Nombre !== 'Monitor 50"'); 
// trae todos los productos que son distintos al nombre ingresado
console.log(Resultado);

