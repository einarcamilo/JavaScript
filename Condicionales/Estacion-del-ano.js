let mes =4;
let estacion;

if (mes==1||mes==2||mes==12){
    estacion="invierno";
}
else if(mes==5||mes==3||mes==4){
    estacion="primavera";
}
else if(mes==8||mes==6||mes==7){
    estacion="verano";
}
else if(mes==10||mes==9||mes==11){
    estacion="otono"
}
else{
    estacion="mes desconocido";
}

console.log("estamos en la estacion del ano "+estacion);