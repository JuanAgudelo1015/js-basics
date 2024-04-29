const eventsArray = [];
count = 0;
let v = true;

while (v) {
  let optionMenu = Number(
    prompt(
      'Bienvenido al administrador eventos\n\n1: Para crear un evento\n2:Para visualizar todos los eventos\n3: Buscar un evento\n4: Para actualizar un evento\n5: Eliminar un evento\n6: Salir'
    )
  );
  if (optionMenu < 1 || optionMenu > 6 || isNaN(optionMenu)) {
    alert('Ingreda una opcion valida');
  }
  switch (optionMenu) {
    case 6:
      {
        v = false;
      }
      break;
    case 1:
      {
        count += 1;
        let eventName = prompt('Ingrese el nombre del evento').toLowerCase();
        let dateEvent = prompt(
          'Ingrese la fecha del evento (formato YYYY-MM-DD)\n'
        );
        let inputDescription = prompt(
          'Ingrese una descripcion sobre este evento'
        );

        let datesEvent = {
          id: count,
          nombre: eventName,
          fecha: dateEvent,
          description: inputDescription,
        };
        eventsArray.push(datesEvent);
        /**
         * EL elemento forEach itera sobre tres parametros:
         *- 1: Elemento
         * 2: INDICE
         * 3: array
         */
        eventsArray.forEach((a, b, c) => {
          if (b === c.length - 1) {
            alert(
              `Su id es: ${a.id}\nnuevo evento es: ${a.nombre}\nLa fecha es: ${a.fecha}\nLa descripcion es: ${a.description}`
            );
          }
        });
      }
      break;
    case 2:
      {
        let mensaje = 'Eventos:\n';
        eventsArray.forEach((element) => {
          mensaje += `NOMBRE: ${element.nombre}, FECHA: ${element.fecha}, DESCRIPCION; ${element.description}\n`;
        });
        alert(mensaje);
      }
      break;
    case 3:
      {
        let nameEventSearch = prompt(
          'Ingrese el nombre del evento que desea buscar'
        ).toLowerCase();
        // Esta varible se va utilzar para almacenar el evento encontrado si existe
        let eventFind = null;
        for (i = 0; i < eventsArray.length; i++) {
          const travelElement = eventsArray[i].nombre;
          // eventFind esta haciendo referencia al evento que se encontro durante la iteracion actal
          // del bucle, luego llamo ah la varible eventsArray[i] que es la variable que me esta iterando
          // sobre los elementos
          if (travelElement.includes(nameEventSearch)) {
            eventFind = eventsArray[i];
            break;
          }
        }
        // Si evento encontradon tiene un valor distinto de null
        if (eventFind) {
          alert(
            `El evento es: ${eventFind.nombre}\nLa fecha es: ${eventFind.fecha}\nLa descripcion es: ${eventFind.description}`
          );
        }
        // Si eventFind sigue siendo null despues de la iteracion doy este mensaje
        else {
          alert('El evento no existe\nIntenta de nuevo');
        }
      }
      break;
    case 4: {
      let numId = null;
      let chromeId = Number(prompt('Ingrese su id para modificar el evento'));
      for (i = 0; i < eventsArray.length; i++) {
        const valueId = eventsArray[i].id
        if (valueId === chromeId) {
          numId = eventsArray[i];
          break;
        }
      }
      if (numId) {
        const newName = prompt(
          `El nombre actual del evento es: ${numId.nombre}\nIngrese el nuevo nombre si desea actualizar`
        );
        const newDate = prompt(
          `La fecha actal del evento es: ${numId.fecha}\nIngrese la nueva fecha si desea actualizar`
        );
        const newDescription = prompt(
          `La descripcion actual del evento es: ${numId.description}\nIngrese el nuevo nombre si desea actualizar`
        );
        // El primer parametro es el objeto que desea copiar
        // El segundo parametro es el objeto de origen hacia donde se desea modificar
        Object.assign(numId,{
          nombre: newName,
          fecha: newDate,
          description: newDescription
        })
      }else {
        alert("El id es incorrecto, intenta de nuevo")
      }
    }
    break;
    case 5: {
      eventsArray.forEach((elemento)=>{
        alert(`Id: ${elemento.id}\nNombre: ${elemento.nombre}\nFecha: ${elemento.fecha}\n Descrpcion: ${elemento.description}`)
      })
      let userId = prompt("Ingrese el id del elemento que desea eliminar");
      // SE ESTA RESTANDO 1 PARA OBTENER LA POSICION REAL
      eventsArray.splice(userId -1, 1)
    }
  break;
}
}
