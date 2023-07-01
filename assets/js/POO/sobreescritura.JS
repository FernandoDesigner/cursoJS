//clase padre
class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: Nombre: ${this.nombre}, Sueldo:  ${this.sueldo}`;
    }
}
//clase hija
class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento=departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento} `;
    }
}
let empleado1 = new Empleado('Brisa','20k');
console.log(empleado1.obtenerDetalles());
let gerente1 = new Gerente('Fernando', '13k', 'E-commerce');
console.log(gerente1.obtenerDetalles())


