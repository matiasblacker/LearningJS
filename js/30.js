//Classes

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    FormatProduct(){
        return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    } 
}

const producto2 = new Producto('TV 4k de 65"', 450000);
const producto3 = new Producto('Laptop Gamer', 800000);

console.log(producto2);
console.log(producto3);

// Nueva clase, con Herencia !!
class Libro extends Producto{ //aqui referenciamos la clase Producto
    constructor(nombre,precio,cod){
        super(nombre, precio); //con super traermos los valores que queremos del constructor de Producto
        this.cod    = cod; 
    }
    FormatProduct(){   //tambien nos traermos el formatear producto
        return `${super.FormatProduct()} y su código es: ${this.cod}`;
    }
}

const libro1 = new Libro('El señor de los anillos, la comunidad del anillo', 90000, '12345');
const libro2 = new Libro('El señor de los anillos, las dos torres', 120000,'123456');
const libro3 = new Libro('El señor de los anillos, El retorno del Rey', 150000,'1234567');

console.log(libro1);
console.log(libro2);
console.log(libro3);




