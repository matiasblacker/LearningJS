// estructuras de control

//condicion if

const puntaje = 1000;

if(puntaje === 1000){ //es igual a 

    console.log(`el puntaje es ${puntaje}`);
}else{
    console.log('No es igual');
}


if(puntaje !== 100){ //NO es igual a 
    console.log('No es igual');
}else{
    console.log(`el puntaje es ${puntaje}`);
}

const efectivo = 1000;
const carrito = 1800;

if (efectivo > carrito){
    console.log("Puede pagar");
}else{
    console.log("no hay efectivo para pagar");
}

const rol = 'Editor';

if(rol === 'ADMINISTRADOR'){
    console.log('Bienvenido al sistema');
}else if ( rol === 'Editor'){
    console.log('puedes entrar')
}else{
    console.log('No es administrador')
}