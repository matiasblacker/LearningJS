// Promises 

const UsuarioAutenticado = new Promise ((resolve, reject) =>{
    const auth = true;

    if(auth){
        resolve('Usuario Autenticado'); // el promise se cumple
    }else{
        reject('No se pudo iniciar sesión'); // el promise no se cumple
    }
});

UsuarioAutenticado
    .then((resultado) => console.log(resultado))
    .catch((resultado) => console.log(error))
    
console.log(UsuarioAutenticado);

// Hay 3 valores del Promise
// Pending: No se ha cumplido,pero tampoco se ha rechazado
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir
// Promises 

