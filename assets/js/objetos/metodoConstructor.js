//funcion constructor de tipo persona, permite crear objetos con el mismo tipo y mismas caracteristicas
function Persona(nombre, apellido, edad , email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    //agregar metodos a un constructor
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}
let miNombre = new Persona('Fer', 'Contreras', '22', 'fer@mail.com');
console.log(miNombre.nombreCompleto())
let miNovia = new Persona('Brisa', 'Garcia', '22', 'brisa@mail.com');
console.log(miNovia.nombreCompleto())
//metodo prototype, añade propiedades a todos los objetos que se vayan a crear de tipo persona 
Persona.prototype.direccion ='un rancho';
console.log(miNovia.direccion)
//modificar el valor agregado solo a un objeto (haber usado previamente prototype)
miNombre.direccion = "una casa";
console.log(miNombre.direccion)