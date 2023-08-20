// Async Await

function DescargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... Espere');
        setTimeout( () => {
            resolve('los datos de clientes fueron descargados');
        }, 5000);
    });
}

function DescargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... Espere');
        setTimeout( () => {
            resolve('los datos de pedidos fueron descargados');
        }, 3000);
    });
}

async function App(){
    try {
        /* const Clientes = await DescargarNuevosClientes(); // Para ejecutar 1 tarea
        console.log(Clientes); */

        // Para ejecutar 2 tareas a la vez y retornar el resultado igual a la misma vez en un array
        const Resultado = await Promise.all([ DescargarNuevosClientes(), DescargarUltimosPedidos() ]);
        console.log(Resultado[0]);
        console.log(Resultado[1]);

    } catch (error) {
        console.log(error);
    }
}
App();

//setTimeout( function() {
// console.log('set timeout...');
//}, 5000); // La funcion se ejecutará despues de 5 segundos 1 sola vez

//setInterval( function() {
//    console.log('set interval...');
//}, 3000); // La funcion se ejecutará cada 3 segundos 

