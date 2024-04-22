const eventsArray = []

alert("BIENVENIDO AL SISTEMA DE GESTOR DE EVENTOS");
let numVeces = parseInt("Ingrese el numero de eventos que desea agregar");
let eventName = prompt('Ingrese el nombre del evento');
let dateEvent = prompt('Ingrese la fecha del evento\nEjemplo: 03/12/24');
let inputDescription = prompt('Ingrese una descripcion sobre este evento');

  let datesEvent = {
    nombre: eventName,
    fecha: dateEvent,
    description: inputDescription,
  };
eventsArray.push(datesEvent);

let newDictonary = {};
let count = 1;

// Utilizar cada evento diccionario como contador 
  // Se esta utilizando el contador entre corchetes es decir la "clave" para agregar un nuevo par clave, valor
  // la clave es el valor actual de contador,   y el valor asociado es el evento
eventsArray.forEach((event) =>{
  newDictonary[count] = event;
  count ++;
})
console.log(eventsArray.nombre)