  let passwordSegura = prompt("Ingrese la contraseña") 
  function validarPassword(password) {
    const passwordRequire =/[!@#$%^&*()+=_\-{}[\]:;"'?<>,.|\\/~]/;
//ENCUENTRA LAS OCURRENCIAS DEFINIDAS EN LA CONSTANTE passwordRequire
    if (password.match(passwordRequire)) {
      alert('La contraseña es segura');
    } else {
      alert(
        'El password debe contener por lo menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo.'
      );
    }
  }
let resultado = validarPassword(passwordSegura)
