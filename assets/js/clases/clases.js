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
class Mascota2 { //clase padre
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
    nombreRaza(){
        return "Nombre: " +this._nombre + " " + "Raza: " + this._tipo;
    }
}

class mascotaHermano extends Mascota2 { //aplica herencia de atributos clase hija
    constructor(nombre, tipo, sexo, tipoMascota) {
        super(nombre, tipo, sexo); //llamar al constructor de la clase padre
        this._tipoMascota = tipoMascota;
    }
    get tipoMascota(){
        return this._tipoMascota;
    }
    set tipoMascota(tipoMascota){
        this._tipoMascota = tipoMascota;
    }

    //sobrescritura
    nombreRaza(){
        return "Nombre: " +this._nombre + " " + "Raza: " + this._tipo + ", " + "Tamaño: " + this._tipoMascota;
    }


}

let mascota2 = new mascotaHermano('messibus', 'snauser', 'M', 'pequeña');
console.log(mascota2)
console.log(mascota2._nombre)
console.log(mascota2.nombreRaza());