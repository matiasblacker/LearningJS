//Metodos de propiedad

const reproductor = {
    reproducir : function(id){ //asignando un id de cancion
        console.log(`reproduciendo canción con el id: ${id}`);
    },
    pausa : function(){
        console.log(`pausando...`)
    },
    crearPlaylist : function (nombre){
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist : function (nombre){
        console.log(`Reproduciendo la playlist ${nombre}`)
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Se ha borrado la cancion con el id: ${id}`)
}

reproductor.reproducir(123);
reproductor.pausa();
reproductor.borrarCancion(355);
reproductor.crearPlaylist('rock');
reproductor.reproducirPlaylist('rock');


