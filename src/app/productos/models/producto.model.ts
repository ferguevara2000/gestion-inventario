export class Producto{
    _id?: number;
    nombre: string;
    marca: string;
    stock: Number;
    precio: Number;

    constructor(nombre: string,  marca: string, stock: Number, precio: Number){
        this.nombre = nombre;
        this.marca = marca;
        this.stock = stock;
        this.precio = precio;
    }
}