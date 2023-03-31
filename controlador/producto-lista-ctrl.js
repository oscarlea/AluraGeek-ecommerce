import { services } from "../service/services.js"; 
/* import { services } from "../service/services-JSONBin.js";  */

const crearNuevaLinea = (id, nombre, precio, imagen) => {
  const linea = document.createElement("li");
  linea.classList.add("producto")
  const contenido = `
  <img class="producto__imagen" src="${imagen}" alt="${nombre}">
  <h3 class="producto__titulo">${nombre}</h3>
  <p class="producto__precio">Precio: $${precio}</p>
  <div class="icons">
    <i class="icon-bin" id="${id}"></i>

    <a href="producto-update.html?id=${id}">
      <i class="icon-pencil" id="${id}"></i> 
    </a>
  </div>
  `;

  linea.innerHTML = contenido;

  const iconBin = linea.querySelector('.icon-bin');
  iconBin.addEventListener('click', () => {
    const id = iconBin.id;

    if (confirm("¿Estás seguro de que deseas eliminar este Producto?")) {
    services
      .deleteProducto(id)
      .then((respuesta) => {
      })
      .catch((err) => alert("Ocurrió un error"));
    }

  });
  return linea;
};

const contenedorPadre = document.querySelector(".producto__lista")

services
  .listaProductos()
  .then((data) => {
    data.forEach(({id, id_categoria, nombre, precio, imagen, descripcion }) => {
      const nuevaLinea = crearNuevaLinea(id, nombre, precio, imagen);
      contenedorPadre.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

