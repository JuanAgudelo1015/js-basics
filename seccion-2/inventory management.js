let inventory = [];
let v = true;
let i = 0;

function listProduct(arrayProducts) {
  arrayProducts.forEach((element) => {
    alert(
      `Su id es ${element.id}\n Nombre del producto: ${element.nombreDelProducto}\nPrecio: ${element.precio}\nCantidad: ${element.cantidad}\nDescripcion ${element.descripcion}`
    );
  });
}
while (v) {
  const menu = Number(
    prompt(`Por favor ingresa una de las siguientes opciones: 
                            \n 1. Agregar un producto
                            \n 2. Ver productos
                            \n 3: Actualizar un producto
                            \n 4. Eliminar producto
                            \n 5. Verificar existencia e inventario
                            \n 6. Venta de productos
                            \n 7. Compra de productos
                            \n 8. Calculo valor total de inventario
                            \n 9. Ordenar productos
                            \n 10. Identificacion de productos con malas palabras
                            \n 11. Salir
                            `)
  );
  if (menu < 1 || menu > 12 || isNaN(menu)) {
    alert('Ingresa una opcion valida');
  }
  switch (menu) {
    case 11:
      {
        v = false;
      }
      break;
    case 1:
      {
        i += 1;
        let productName = prompt('Ingrese el nombre del producto');
        let price = Number(prompt('Ingrese el precio del producto'));
        let quantity = Number(prompt('Ingrese la cantidad del producto'));
        let description = prompt('Ingrese la description del producto');

        let datesInventory = {
          id: i,
          nombreDelProducto: productName,
          precio: price,
          cantidad: quantity,
          descripcion: description,
        };
        inventory.push(datesInventory);
        inventory.forEach((a, b, c) => {
          if (b === c.length - 1) {
            alert(
              `Su id es: ${a.id}\nEl nombre del producto es: ${a.nombreDelProducto}\nEl precio es: ${a.fecha}\n La cantidad es ${a.cantidad}\nLa descripcion es : ${a.descripcion}`
            );
          }
        });
      }
      break;
    case 2:
      {
        alert(`Los Productos son\n ${listProduct(inventory)}`);
      }
      break;
    case 3: {
      alert(`Los Productos son\n ${listProduct(inventory)}`);
      let numId = null;
      let chromeId = Number(prompt('Ingrese su id para modificar el producto'));
      for (i = 0; i < inventory.length; i++) {
        const valueId = inventory[i].id;
        if (valueId === chromeId) {
          numId = inventory[i];
          break;
        }
      }
      if (numId) {
        const newName = prompt(
          `El nombre actual del producto es: ${numId.nombreDelProducto}\nIngrese el nuevo nombre si desea actualizar`
        );
        const newPrice = prompt(
          `La fecha actal del evento es: ${numId.precio}\nIngrese la nueva fecha si desea actualizar`
        );
        const newQuantity = prompt(
          `La descripcion actual del evento es: ${numId.cantidad}\nIngrese el nuevo nombre si desea actualizar`
        );
        const newDescription = prompt(
          `La descripcion actual del evento es: ${numId.cantidad}\nIngrese el nuevo nombre si desea actualizar`
        );
        // El primer parametro es el objeto que desea copiar
        // El segundo parametro es el objeto de origen hacia donde se desea modificar
        Object.assign(numId, {
          nombreDelProducto: newName,
          price: newPrice,
          quantity: newQuantity,
          descripcion: newDescription
        });
      } else {
        alert('El id es incorrecto, intenta de nuevo');
      }
    }
    break;
    case 4: {
      let userId = prompt("Ingrese el id del producto que desea eliminar");
      inventory.splice(userId -1, 1)
  }
  case 5: {
    let nameUserProduct = prompt("Ingrese el nombre del producto para Verificar");
    // Verificar si al menos un producto coincide con el nombre que me ingreso el usuario
    let productExisting = inventory.some(producto => producto.nombreDelProducto === nameUserProduct)
    if (productExisting){
      let enoughtQuantity = inventory.filter(enought => enought.cantidad >= 5)
      let message = "EL producto si existe, y la cantidad disponible para vender es:\n"
      enoughtQuantity.forEach(element => {
      message += `${element.cantidad}`;
      });
      alert(message)
    }else {
      alert("El producto no existe\n Intenta de nuevo")
    }
    }
    break;
  }
}
