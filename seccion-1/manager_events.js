const eventsArray = []
count = 0
while(true){
  option = parseInt(prompt("1: Para crear un evento\n2:Para actualizar un evento\n3:Buscar un evento\n4:Para eliminar un evento\n5:Salir"));
  if (option === 1){
    count +=1
    let eventName = prompt('Ingrese el nombre del evento');
    let dateEvent = prompt('Ingrese la fecha del evento\nEjemplo: 03/12/24');
    let inputDescription = prompt('Ingrese una descripcion sobre este evento');

    let datesEvent = {
      id: count,
      nombre: eventName,
      fecha: dateEvent,
      description: inputDescription
    };
    eventsArray.push(datesEvent);
    console.log(eventsArray)
    /**
     * EL elemento forEach itera sobre tres parametros:
     *- 1: Elemento
     * 2: INDICE
     * 3: array
     */
    eventsArray.forEach((a,b,c)=>{ 
      if (b === c.length-1) { 
        alert(`El nuevo evento es ${a.nombre}\nLa fecha es ${a.fecha}\nLa descripcion es ${a.description}`) }
    })
    
  }
  else if(option === 5){
    break
  }
}

