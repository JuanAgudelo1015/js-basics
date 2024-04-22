let ratings = prompt('Ingrese las calificaciones del estudiante separadas por coma');
let ratingSpace = ratings.split(',');
// SE EMPIEZA SUMANDO DESDE EL INDICE 0 + EL numeroActual
let sum = ratingSpace.reduce((acumulador, numeroActual) => acumulador + Number(numeroActual),0);
let spaceTotal = ratingSpace.length;
let resultado = parseFloat(sum / spaceTotal);
alert(`EL PROMEDIO DE LAS CALIFICACIONES ES ${resultado}`)

