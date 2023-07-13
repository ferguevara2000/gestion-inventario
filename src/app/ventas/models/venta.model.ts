export class Venta{
    _id?: number;
    cliente: string;
    empleado: string;
    producto: string;
    precio: string;

    constructor(cliente: string, empleado: string, producto: string, precio: string){
        this.cliente = cliente;
        this.empleado = empleado;
        this.producto = producto;
        this.precio = precio;
    }
}