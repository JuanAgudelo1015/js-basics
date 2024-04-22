let enterYourEmail = prompt("Ingrese su correo electronico")
function validateEmail (email){
  const emailRequire = /[`@ .` ]/;
  if (email.match(emailRequire)){
    alert("CORREO ELECTRONICO VALIDO")
  } else {
    alert("Intenta de nuevo")
  }
}

let resultado = validateEmail(enterYourEmail)