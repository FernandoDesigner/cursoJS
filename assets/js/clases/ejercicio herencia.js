class Persona {
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {
        this._idpersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get id_persona() {
        return this._id_persona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        return this._edad = edad;
    }

    toString() {
        return `${this._idpersona} ${this._nombre} ${this._apellido} ${this._edad}`; //template string
    }

}

class Empleado extends Persona {
    static contadorEmpleados = 0;
    constructor(sueldo, nombre, apellido, edad) {
        super(nombre, apellido, edad)
        this._id_empleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;

    }
    get id_empleado() {
        return this._id_empleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} ${this._id_empleado} ${this._sueldo}`;
    }

}

class Cliente extends Persona {
    static contadorClientes = 0;
     constructor(fechaRegistro, nombre, apellido, edad) {
         super(nombre, apellido, edad)
         this._id_cliente = ++Empleado.contadorClientes;
         this._fechaRegistro = fechaRegistro;

     }
    
    get id_cliente() {
        return this._id_cliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = fechaRegistro;
    }

    toString() {
        return `${super.toString()} ${this._id_cliente} ${this._fechaRegistro}`;
    }

}

//prueba clase persona
let persona1 = new Persona("Fernando", "Contreras", 23);
console.log(persona1.toString())

let persona2 = new Persona("Brisa", "Garcia", 23);
console.log(persona2.toString())

let empleado1 = new Empleado(20000, 'David', 'Salazar', 27 );
console.log(empleado1.toString());

let empleado2 = new Empleado(15000, 'Karla', 'Villegas', 22 );
console.log(empleado2.toString());

let cliente1 = new Cliente('Alejandro', 'alex', 28, new Date());
console.log(cliente1.toString());
