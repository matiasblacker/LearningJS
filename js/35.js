// Fetch API
// Es el reemplazo a AJAX,permite enviar informacion u obtener informacion de un servidor  
// Puede obtener un archivo local o una respuesta del servidor en text o JSON
// JS necesita un lenguaje de backend para realizar la consultas, utliza Async Await y Promises 
// JSON (JavaScript Object Notation)  es un lenguaje de transporte de datos.
// JSON puede ser creado en cualquier lenguaje y se puede consumir en JS por medio de Fetch API y mostrarlo en la web
// Lenguajes de Backend como Python,C#, PHP,NODE,JAVA puede exportar respuestas en JSON


async function ObtenerEmpleados() {
    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then(datos => {
    //         //console.log(datos.empleados);
    //         const {empleados} = datos;
    //         //console.log(empleados);

    //         empleados.forEach(empleado => {
    //             //console.log(empleado);
    //             console.log(empleado.Id);
    //             console.log(empleado.Nombre);
    //             console.log(empleado.Puesto);

    //         })
    //     }) 
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
};

ObtenerEmpleados();

