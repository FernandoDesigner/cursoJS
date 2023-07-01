//arrow function

const sumar = (a, b) => {
    return a + b;
};
const sumarDos = (a , b) => a+b;
const resul = sumarDos(5,3);
console.log(resul)

//forma reducida si solo retornaras un valor

const sumarEsto = (a, b) => a + b;
//declaracion de la funcion.¿
function miFuncion(a,b){
   return a + b;
}
let result = miFuncion(2,5);
console.log(result)

//funciones de tipo expresion
let x = function(a,b){return a + b};
result = x(1,2);
console.log(result);

//funciones tipo self invoking, funcion no reutilizable, solo se puede llamar una sola vez
(function(a,b){
    console.log("suma =" + " " + (a+b))
})(3,4);

//sumar todos los parametros de una funcion

let resultado = sumarTodo(5,15,20,25);
function sumarTodo(){
    let lasuma = 0;
    for(i = 0; i < arguments.length; i++){
        lasuma += arguments[i]; //suma = suma + arguments[i]
    }
    return lasuma;
}
console.log(resultado)