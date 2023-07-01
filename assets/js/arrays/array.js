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