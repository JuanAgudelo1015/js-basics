const userList = []

// let totalUsers = Number(prompt("Cuantos nombres de usuario desea almacenar?"))

let optionOpened = true
while (optionOpened){
  let menu = Number(prompt("1: Generar un nombre\n2:Salir"));
  if (menu < 1 || menu > 2 || isNaN(menu)){
    alert("Ingresa una opcion correcta")
  }
switch (menu){
  case 2: {
    optionOpened = false
  }
  break;
  case 1: {
    let fullName = prompt('Ingrese su nombre completo').toLowerCase();
    let methodSplit = fullName.split(' ', 2);
    let FirstSpacePosition = fullName.indexOf(' ');
    let firstThreeLettersName = fullName.slice(0, 3);
    let firsThreeLettersLastName = fullName.slice(FirstSpacePosition + 1, FirstSpacePosition + 4);
    let userName = firstThreeLettersName + firsThreeLettersLastName;

    let datesUser = {
      user: userName,
      email: userName + '@myDomain.com',
    };
    userList.push(datesUser);
    let verifyName = userList[0];
    // Con el Object accedo ah las claves
    // con el .map accedo ah los valores correspondientes de las claves
    let value = Object.keys(verifyName).map((result) => verifyName[result]);
    alert(`${value}`);

    for (i = 0; i < userList.length; i++){
      let nameSearch = userList[i].user;
      if (nameSearch.includes(fullName)){
        alert("El nombre ya existe Intente de nuevo")
      }else {
        alert("El nombre no existe")
      }
    }
    // if (value.includes(fullName)) {
    //   alert('El nombre de usuario ya existe');

    // []
  }
}
}

