let numero1 = 10;
let edad = Number(numero1)
console.log(typeof numero1);

let numero = "18";
let age = Number(numero);

if(isNaN(numero)){
    console.log("no es un numero");
}else{
    let resultado = (age >=18) ? "puede votar" : "no puede votar";
    console.log(resultado);
}