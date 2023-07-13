export class Empleado{
    _id?: number;
    nombre: string;
    apellido: string;
    cargo: string;
    telefono: string;
    salario: Number;

    constructor(nombre: string, apellido: string, cargo: string, telefono: string, salario: Number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.telefono = telefono;
        this.salario = salario;
    }
}