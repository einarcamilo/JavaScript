let Numero="10";
console.log(typeof Numero)

//funcion Number hace la conversion
let edad=Number(Numero);
console.log(typeof edad);

if(edad>=18){
    console.log("Puede Votar");
}
else{
    console.log("No puede votar")
}

let resultado=(edad>=18) ? "Puede Votar": "Muy jover para votar";
console.log(resultado)

