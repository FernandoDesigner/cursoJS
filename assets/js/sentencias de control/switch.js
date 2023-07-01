let numero = 3;
let numTexto = "desconocido";

switch(numero){
    case 1:
        numTexto = "num 1";
        break;
    case 2:
        numTexto = "num 2";
        break;
    case 3:  
        numTexto = "num 3"; 
        break;
    default: 
        numTexto = "caso no encontrado";       
}
console.log(numTexto);