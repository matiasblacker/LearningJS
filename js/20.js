//parametros de las funciones

function Sumar(num1, num2) {
    console.log(num1 + num2);
}           
Sumar(10, 10);//lamada de la funcion
Sumar(15, 10);// argumentos o los valores reales
Sumar(20, 10);
Sumar(25, 10);

//Expresion de la funcion
const Sumar2 = function(n1, n2, n3){
console.log(n1 + n2 * n3);//mostrar el consola
}
Sumar2(12, 12, 2); // primero multiplica y luego suma, siguiendo la logica matematica
Sumar2(12, 12, 3);
Sumar2(12, 12, 4);

//Parametro por default
function Sumar(nu1 = 0, nu2 = 0) {
    console.log(nu1 + nu2);
}           
Sumar(1);//lamada de la funcion
Sumar();// argumentos o los valores reales
//toma los valores dados en la funcion en caso de no existir el valor al llamar la funcion