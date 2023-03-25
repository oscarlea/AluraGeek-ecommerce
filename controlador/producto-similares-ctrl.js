import { services } from "../service/services.js";

const contenedorProductos = document.getElementsByClassName("catalogo__contenedor")[0];

const url = new URL(window.location);
const id = url.searchParams.get("id_categoria");

console.log("url -> " + url);
console.log("id -> " + id);

services
  .productosDeUnaCategoria(id)
  .then(data => {
    data

        // Crea un elemento <ul> para los productos y agrega sus detalles
        .forEach(producto => {
         
          const listaProductos = document.querySelector(".producto__lista");

          const elementoProducto = document.createElement('li');
          elementoProducto.classList.add("producto");
          elementoProducto.innerHTML = `
          <img class="producto__imagen" src="${producto.imagen}" alt="${producto.nombre}">
          <h3 class="producto__titulo">${producto.nombre}</h3>
          <p class="producto__precio">Precio: $${producto.precio}</p>
          <a class="producto__link" href="producto-detalle.html?id=${producto.id}&&id_categoria=${producto.id_categoria}" >Ver producto</a> 
        `;
          listaProductos.appendChild(elementoProducto);
        });
  })
  .catch(error => console.log(error));