let persona1 = {
    nombre: "Fer",
    apellido: "Contreras",
    nombreCompleto: function(titulo, tel){ //no se usa this para los parametros
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}
let persona2 = {
    nombre: "Brisa",
    apellido: "Garcia"
    
}
//uso de call para usar el metodo persona1.nombreCompleto con los datos del objeto persona 2
console.log(persona1.nombreCompleto('Ing' , "5547620799") );

console.log(persona1.nombreCompleto.call(persona2));
//paso de arguamentos a call 
console.log(persona1.nombreCompleto.call(persona2, "Ing", "5579363036"));