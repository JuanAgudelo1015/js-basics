const userList = []

// let totalUsers = Number(prompt("Cuantos nombres de usuario desea almacenar?"))
while (true){
  let fullName = prompt("1:Ingrese su nombre completo").toLowerCase()
  let methodSplit = fullName.split(" ", 2);
  let FirstSpacePosition = fullName.indexOf(' ');
  let firstThreeLettersName = fullName.slice(0, 3)
  let firsThreeLettersLastName = fullName.slice(FirstSpacePosition + 1, FirstSpacePosition + 4);
  let userName = firstThreeLettersName + T104hreeLettersLastName;

  let datesUser = {
    user: userName,
    email: userName + '@myDomain.com'
  }
  userList.push(datesUser)
  let verifyName = userList[0];
  // Con el Object accedo ah las claves
  // con el .map accedo ah los valores correspondientes de las claves
  let value = Object.keys(verifyName).map(result => verifyName[result])
  console.log(value)
  
  // if (value.includes(fullName)) {
  //   alert('El nombre de usuario ya existe');

  // []
  
}
