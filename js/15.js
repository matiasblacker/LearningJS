//Arrays
//sirve para agrupar elementos

const Num = [10,20,30,40,50,60,70,80,90,100];
//console.log(Num);
console.table(Num);

//Acceder a los valores del Array del const Num
console.log(Num[8]);

const Meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
console.table(Meses);

// conocer la extension del Array Meses
console.log(Meses.length);

//recorrer el Array Meses
Meses.forEach(function(mes){
    console.log(mes)
});

