export class Cliente{
    _id?: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    telefono: string;
    correo: string;

    constructor(nombre: string, apellido: string, fechaNacimiento: string, telefono: string, correo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
        this.correo = correo;
    }
}