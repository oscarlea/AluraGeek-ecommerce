import { services } from "../service/services.js";

const contenedorProductos = document.querySelector(".catalogo__contenedor");

services
    .dataDelCono()
    /* .listaProductosPorCategoria() */
    .then((data) => {
        data.forEach(({ categoria, productos }) => {
            // Create div container for category with its name
            const contenedorCategoria = document.createElement("div");
            contenedorCategoria.className = "categoria";
            contenedorCategoria.innerHTML = `
            <h2 class="categoria__titulo">${categoria}</h2>
            <a href="#" class="categoria__link">Ver todo -></a>
          `;
            // Create ul for products with their details
            const listaProductos = `<ul class="producto__lista">
          ${productos
                    .map(
                        ({ imagen, nombre, precio }) => `
                <li class="producto">
                  <img class="producto__imagen" src="${imagen}" alt="${nombre}">
                  <h3 class="producto__titulo">${nombre}</h3>
                  <p class="producto__precio">Precio: $${precio}</p>
                  <a class="producto__link" href="#">Ver producto</a>
                </li>
              `
                    )
                    .join("")}
        </ul>`;
            // Append created elements inside the main container element
            contenedorProductos.insertAdjacentElement("beforeend", contenedorCategoria);
            contenedorProductos.insertAdjacentHTML("beforeend", listaProductos);
        });
    })
    .catch((error) => console.log(error));
