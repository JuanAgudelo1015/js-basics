// sumPromedio

let userNotes = prompt(
  'Ingresa las calificaciones de los estudiantes separadas por coma'
);
let noteSplit = userNotes.split(',');
let sumPromedio = noteSplit.reduce(
  (acumulador, numeroActuaal) => acumulador + Number(numeroActuaal),
  0
);
let comaTotales = noteSplit.length;
let resultPromedio = parseInt(sumPromedio / comaTotales);

// CALIFICACION MAYOR
// mas barato va ser la primera posicion
const calfMayor = noteSplit.reduce(
  (acumulador, numeroActual) => Math.max(acumulador, numeroActual),
  0
);

// CALIFICACION MENOR
const calfMenor = Math.min(...noteSplit);

// NUMERO DE APROBADOS
const aprobados = noteSplit.filter((mayor) => mayor >= 70).length;
// NUMERO DE REPROBADOS
const reprobados = noteSplit.filter((menor) => menor < 70).length;

// LISTA DE CALFICACIONES ORDENADAS DE MAYOR AH MENOR
const mayorMenor = noteSplit.sort((a, b) => b - a);

const result = alert(
  `El promedio es: ${resultPromedio}\nLa calificacion mayor es: ${calfMayor}\nLa calificacion menor es: ${calfMenor}\nEl numero de aprobrados es: ${aprobados}\nEl numero de repobrados es: ${reprobados}\nLista de notas: ${mayorMenor}`
);
