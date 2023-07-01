let a = 3, b=2;
z = a + b;

//incremento
//pre incremento (operador ++ antes de la variable) primero incrementa el valor y luego se asigna a la variable
z= ++a
console.log(a)
console.log(z) 
//post incremento (operador ++ despues de la variable) primero se asigna el valor a la variable y despues se incrementa
z= b++
console.log(b) 
console.log(z)

//decremento
//pre-decremento

z= --a;
console.log(a);
console.log(z);

//pos decremento
z = b --;
console.log(b);
console.log(z); 

//operadores de asignacion

let x = 1;
x += 3; //x = x + 3
console.log(x)
x-= 2; // x = x - 2
console.log(x)

/* otros operadores
*=
/=
%=

**/


//operadores de comparacion
let e = 3, m = 2, c = "3";
let k = (a == c); // se revisa el valor sin importar el tipo
console.log(k);

k = a===c; //revisa si los valores son iguales, pero tambien los tipos
console.log (k)

 //operador Ternario 
 let resul = ( 3 > 2) ? "verdadero" : "false";
 console.log(resul);

 let num = 9;
 resul = ( num % 2 == 0) ? "numero par" : "numero inpar";

 
