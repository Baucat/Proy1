// Lista de productos y precios
const productos = [
  { nombre: "Mandioca", precio: 500 },
  { nombre: "Uva", precio: 400 },
  { nombre: "Toronjas", precio: 300 },
  { nombre: "Papaya", precio: 100 },
  { nombre: "Pepino", precio: 350 }
];

// Mostrar productos disponibles
function mostrarProductos() {
  let lista = "Productos disponibles:\n";
  for (let i = 0; i < productos.length; i++) {
    //Este método permite mostrar la lista los productos disponibles en un mismo alert
    //${i + 1} esto es un contador de elementos
    lista += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
  }
  alert(lista);
}

// Elegir producto y cantidad
function realizarCompra() {
  mostrarProductos();
  let seleccion = parseInt(prompt("Ingresá el número del producto que querés comprar (1-3):"));
  if (seleccion < 1 || seleccion > productos.length || isNaN(seleccion)) {
    alert("Selección inválida.");
    return;
  }

  let cantidad = parseInt(prompt(`¿Cuántos kilos de ${productos[seleccion - 1].nombre} querés comprar?`));
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad inválida.");
    return;
  }

  const precioFinal = cantidad * productos[seleccion - 1].precio;
  alert(`Vas a pagar $${precioFinal} por ${cantidad}kg de ${productos[seleccion - 1].nombre}`);
}

// Confirmar si quiere comprar de nuevo
function simulador() {
  do {
    realizarCompra();
  } while (confirm("¿Querés hacer otra compra?"));
  alert("¡Gracias por comprar!");
}

simulador();