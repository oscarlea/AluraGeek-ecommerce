import { services } from "../service/services.js";  
/* import { services } from "../service/services-JSONBin.js";  */

const url = new URL(window.location);
const id = url.searchParams.get("id_categoria");

services
  .productosDeUnaCategoria(id)
  .then(data => {
    data
        .forEach(producto => {
         
          const listaProductos = document.querySelector(".producto__lista");

          const elementoProducto = document.createElement('li');
          elementoProducto.classList.add("producto");
          elementoProducto.innerHTML = `
          <img class="producto__imagen" src="${producto.imagen}" alt="${producto.nombre}">
          <h3 class="producto__titulo">${producto.nombre}</h3>
          <p class="producto__precio">Precio: $${producto.precio}</p>
          <a class="producto__link" href="producto-read.html?id=${producto.id}&&id_categoria=${producto.id_categoria}" >Ver producto</a> 
        `;
          listaProductos.appendChild(elementoProducto);
        });
  })
  .catch(error => console.log(error));