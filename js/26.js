// For loops
// `` es template string para poder escribir y colocar variables con ${}
for(let i = 1; i < 100; i++) {
   if(i % 2 === 0){
      console.log(`el número ${i} es par`);
   }else{
      console.log(`el numero ${i} es impar`)
   } 
}
// primero es donde empieza, eneste cas oel indice 0 
// segundo es la condicion sea verdadera
// tercero es el incremento
// i++ es incremento de uno en uno
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
for(let i = 0; i < Carrito.length; i++ ){
  console.log(Carrito[i]);
}

// While loop

let i = 0; // indice o valor inicial
while(i < 100){ // condicion
   if(i % 2 === 0){
      console.log(`El numero ${i} es par`)
   }else{
      console.log(`El numero ${i} es impar`)
   }
   i++; //incremento o decremento
}
const Carrito2 = [
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

let x=0;
while(x < Carrito2.length){
   console.log(Carrito2[x].Nombre);
   x++;
}

// Do While
let z = 0;
do{
   console.log(z);
   z++;
}while(z < 10);

