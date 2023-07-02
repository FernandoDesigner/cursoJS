//let autos = new Array('BMW', 'CADILLAC', 'VOLVO');
const autos = ['BMW', 'AUDI', 'SUBARU'];
console.log(autos)

/* Recorrer elementos de un array*/
console.log(autos[2])

for(let i = 0; i < autos.length; i++){
    console.log(i + ':' + autos[i])
}

/*Modificar elementos de un arreglo*/
autos[2]='HONDA'
console.log(autos)
autos.push('Subaru');
//manera mediante longitus
console.log(autos.length)
autos[autos.length] = "Cadillac";
//medianta indice no recomendable ya que deja espacios vacios si no se usa el indice correcto
autos[6] = "Porshe";
console.log(autos) 
autos.shift() //eliminar el primer elemento del array
console.log(autos)
//insertar nuevo elemento al final del arreglo
autos.push("Mercedes AMG");
console.log(autos)

autos.unshift("MG") //insertar nuevo elemento al inicio del arreglo
console.log(autos)

autos.pop() //elimina el ultimo elemento del array
console.log(autos)

autos.splice()
console.log(autos)

autos.splice(0,1,"tsurito")
console.log(autos)








// ejercicio de javascript web

const clasificaciones =['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio']; //creacion del arreglo

for(let i=0; i<clasificaciones.length; i++){  //impresion de clasificaciones
    console.log('posicion' + " " + i  + ":" + " " + clasificaciones[i]);
}
//adelantamoento de celia a raul
clasificaciones[2]='Celia';
clasificaciones[3]="Raul";
clasificaciones
console.log(clasificaciones)
//antonio hace trampa y lo mandan alv
clasificaciones.splice(5,1);
console.log(clasificaciones)

clasificaciones.splice(1, 0, "Roberto ", "Amaya"); // se integran dos nuevos entre ana y oswaldo
clasificaciones

clasificaciones.splice(0,0, "Marta") // se integra marta a la cabeza
clasificaciones