let persona1 = {
    nombre: "Fer",
    apellido: "Contreras",
    nombreCompleto: function(nombre, apellido){ //no se usa this para los parametros
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Brisa",
    apellido: "Garcia"
    
}
//uso de call para usar el metodo persona1.nombreCompleto con los datos del objeto persona 2
console.log(persona1.nombreCompleto.call(persona2))