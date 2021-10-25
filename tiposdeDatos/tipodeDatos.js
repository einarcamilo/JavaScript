//string
var nombre="camilo";
console.log(nombre);

//Tipo numerico
var numero=1000;
console.log(numero);

//objecto
var objecto={
    nombre : "Juan",
    apellido : "Perez",
    telefono : "3105592957"
}
console.log(objecto);

//tipo de dato
console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof objecto);

//booleano
var bamdera=true;
console.log(bamdera);
console.log(typeof bamdera);

//funciones
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo Symbol
var simbolo=Symbol("miSimbolo");
console.log(typeof simbolo);

//Tipo de Clase
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo underfine
var x;
console.log(x);
console.log(typeof x);

//Tipo null
var y=null;
console.log(y);
console.log(typeof y);

//arreglos
var autos=['BMW','Audi','Volvo'];
console.log(autos);
console.log(typeof autos);

//cadenas vacias
var z='';
console.log(z);
console.log(typeof z);

