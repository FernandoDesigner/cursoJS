let persona1 = {
    nombre: "Fer",
    apellido: "Contreras",
    nombreCompleto: function(titulo, tel){
        //return this.nombre + " " + this.apellido; 
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}
let persona2 = {
    nombre: "Brisa",
    apellido: "Garcia"
    
}

console.log(persona1.nombreCompleto("ing", "12346"));
//a diferencia de call que se pasan de 1 en 1 con comas, en apply se debe definir un arreglo con los parametros y se pasa el arreglo
let arreglo = ['Lic', '5570393036'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo))