// this

const Reservacion = {
    Nombre: 'Matias',
    Apellido: 'Perez',
    Total: 50000,
    Pagado: false,
    Informacion: function(){
        console.log(`El cliente ${this.Nombre} reservó y su cantidad a pagar es de ${Reservacion.Total}`);
    }
}

Reservacion.Informacion();

const Reservacion2 = {
    Nombre: 'Juan',
    Apellido: 'Perez',
    Total: 50500,
    Pagado: false,
    Informacion: function(){
        console.log(`El cliente ${this.Nombre} reservó y su cantidad a pagar es de ${Reservacion2.Total}`);
    }
}

Reservacion2.Informacion();