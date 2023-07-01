let mes = 6;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "invierno";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "primavera";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "verano";
}else if(mes == 9 || mes == 10 || mes == 11){
    estacion = "otoño";
}else{
    estacion = "desconocido";
}
console.log(estacion)


let saludo;
let hora = 3;

if(hora >= 6 && hora <= 11){
    saludo = "buenos dias"
}else if( hora >= 12 && hora <= 18){
    saludo = "buenas tardes"
}else if(hora>= 19 && hora <=24){
    saludo = "buenas noche "
}else if(hora >= 0 && hora < 6){
    saludo = "re mimido"
}
console.log(saludo)