// Funciones, son procedimientos y acciones
// son reutilizables

//Declaracion de la funcion
//Crear la funcion y luego llamarla
function Sumar() {
}
Sumar();//lamada de la funcion

//Expresion de la funcion
const Sumar2 = function(){
    console.log(12*12);//mostrar el consola
}
Sumar2();

//IIFE
(function(){
    console.log('es una funcion');
})();