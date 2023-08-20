//Modificar Objetos

const Producto = {
    NombreProducto : "Gpu Amd",
    Precio : 399990,
    Disponible : true
}

// agregar nuevas propiedades
Producto.Imagen = 'imagen.jpg';

//eliminar propiedades
delete Producto.Disponible;

console.log(Producto);
