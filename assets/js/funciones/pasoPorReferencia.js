const persona = {
    nombre: 'Fernando',
    apellido: 'Contreras'
}

function cambiarValor(p1){
    p1.nombre = 'Brisa';
    p1.apellido = 'Garcia';
}

cambiarValor(persona);
console.log(persona);