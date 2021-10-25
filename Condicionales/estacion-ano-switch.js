let mes=4;
let estacion='Estacion desconocida';

switch (mes){
    case 1: case 2: case 12:
        estacion='invierno';
        break;
    case 3: case 5: case 4:
        estacion='primavera';
        break;
    case 8: case 6: case 7:
        estacion='verano';
        break;
    case 11: case 9: case 10:
        estacion='otono'
        break;
    default:
        estacion='valor incorrecto';
}

console.log(estacion);