let a =5;
let valMin=0;
let valMax=10;

// and=&& debe cumplir las dos condiciones para que sea verdadero

if ((a>=valMin) && (a<=valMax)){
    console.log("Dentro de rango");
}

else{
    console.log("Fuera de Rango");
}
// or=|| debe cumplir por lo menos una de las dos condiciones apra que sea verdadero

let vacaciones=false,diaDescanso=false;

if (vacaciones||diaDescanso){
    console.log("Padre puede asistir al juego")
}
else{
    console.log("El Padre esta ocupado")
}