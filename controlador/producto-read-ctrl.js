import { services } from "../service/services.js"; 
/* import { services } from "../service/services-JSONBin.js";  */

const crearNuevaLinea  = (id, categoria, nombre, precio, imagen) => {
    const linea = document.createElement("div");
    linea.className = "detalle"; 
    const contenido = `
      <div class="detalle__imagen">
        <img src="${imagen}" alt="${nombre}" >
      </div>
      <div class="detalle__contenedor">
        <h2 class="detalle__titulo">${nombre}</h2>
        <p class="detalle__precio">$${precio}</p>
        <p class="detalle__descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo numquam sint, dicta fugiat vel corrupti explicabo eum pariatur aspernatur molestiae quis repudiandae placeat recusandae facere nulla, dolor quos nisi!</p>
      </div>
    `;
    linea.innerHTML = contenido;
  return linea;
};

var elementoExistente = document.querySelector(".similares");
var contenedorPadre = elementoExistente.parentNode;

const url = new URL(window.location);
const id = url.searchParams.get("id");

services
  .readProducto(id)
  .then(data => {
        const nuevoContenedor = crearNuevaLinea(data.id, data.categoria_id, data.nombre, data.precio, data.imagen);
        contenedorPadre.insertBefore(nuevoContenedor, elementoExistente);
})
  .catch((error) => alert("Ocurrió un error"));