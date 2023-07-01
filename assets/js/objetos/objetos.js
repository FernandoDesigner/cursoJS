let persona = {
    nombre: 'Fernando',
    apellido: 'Contreras',
    email: 'fer@mail.com',
    edad: 22,
    //agregar metodo en un objeto 
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = new Object();
persona2.nombre = 'Brisa';
persona2.direccion = 'Geo';
persona2.tel = '5539703036'
console.log(persona.nombreCompleto())

//aceder a propiedades 
console.log(persona['apellido']);
//ciclo for in
for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}
//agregar o eliminar propiedades de un objeto

persona.tel='5547624785';
console.log(persona)
delete persona.tel;
console.log(persona)

//formas de imprimir objetos
//concatenando
console.log(persona.nombre + ', ' + persona.apellido)
// ciclo for in
for(propiedad in persona){
    console.log(persona[propiedad])
}

//sintaxis object
let arrayPersona = Object.values(persona);
console.log(arrayPersona);

//JsonStringify convierte el objeto en json
let personaString = JSON.stringify(persona);
console.log(personaString)

