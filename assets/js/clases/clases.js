// Una clase contiene 
// nombre, atributos y metodos

class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

let persona1 = new Persona('Fernando', 'Contreras'); //objeto tipo persona con atributos
console.log(persona1)

//metodo Get y Set
class Mascota {
    constructor(nombre, tipo, sexo) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._sexo = sexo;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let mascota1 = new Mascota('Miky', 'Gato', 'M');
console.log(mascota1.nombre)

mascota1.nombre = "Manotas";
console.log(mascota1.nombre)

//HERENCIA
class Mascota2 {
    constructor(nombre, tipo, sexo) {
        this._nombre = nombre;
        this._tipo = tipo;
        this._sexo = sexo;
    }

    get nombre() {
        return this._nombre;
    }
    get tipo() {
        return this._tipo;
    }
    get sexo() {
        return this._sexo;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    set tipo(tipo) {
        this._tipo = tipo;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
}

class mascotaHermano extends Mascota2 { //aplica herencia de atributos
    constructor(tipoMascota) {
        this._tipoMascota
    }
}