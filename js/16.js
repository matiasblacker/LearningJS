//Metodo para los Arrays

const Num = [10,20,30,40,50,60,70,80,90,100];
//console.log(Num);
Num.push(110,120,130,140); //Para agergar al final de Array
Num.unshift(-10,-20,-30); //Para agregar al inicio del Array
console.table(Num);

const Meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];

//Para eliminar elementos
//Meses.pop(); // Eliminar el ultimo elemento del Array
//Meses.shift(); //Elimina el primer elemento del Array
Meses.splice(2, 1); // El primer valor es el dato a eliminar, y el segundo la cantidad a borrar a partir del primero dato
console.table(Meses);

//Rest Operator o Spread Operator

const NewMeses = [...Meses];
console.table(NewMeses);