//metodo get y set 

let persona = {
    nombre: 'Fernando',
    apellido: 'Contreras',
    email: 'fer@mail.com',
    edad: 22,
   
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
     //metodo Set
     set lang(lang){
        this.idioma = lang.toUpperCase();
     },
    //metodo Get
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto)
console.log(persona.lang)
persona.lang = 'eng';
console.log(persona.idioma)
