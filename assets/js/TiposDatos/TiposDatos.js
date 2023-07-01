//Tipo de dato String
var nombre = "Caracter";
console.log(nombre);

nombre = 10;
console.log(typeof nombre)

//Tipo de dato numerico 
var numero = 1;
console.log(numero);

//Tipo de dato  Object
var objeto = {
    nombre: "juan",
    numero: 1
}
console.log(typeof objeto)

//tipo dato boleano (true o false)

var bandera = false;
console.log(bandera)

//tipo de dato function
function myFunction(){}
console.log(typeof myFunction)

//tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//tipo clase es una funcion
class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
    

}
console.log(typeof persona)

//tipo dato undefined

var x;
console.log(x)

//null = ausencia de valor
var y = null;
console.log(typeof y)

//arrays

var autos = ['BMW', 'Audi'];
console.log(autos);

//cadena vacia 
var z="";
console.log(z)


