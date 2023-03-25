import { services } from "../service/services.js";

const contenedorProductos = document.getElementsByClassName("catalogo__contenedor")[0];

services
  /*  .dataDelCono()  */
  .listaProductosPorCategoria()
  .then(data => {
    data
      .forEach(categoria => {
        // Crea un elemento <div> para la categoría y agrega su nombre
        const contenedorCategoria = document.createElement('div');
        contenedorCategoria.classList.add("categoria")
        contenedorCategoria.innerHTML = `<h2 class="categoria__titulo">${categoria.categoria}</h2>
                                       <a href="#" class="categoria__link">Ver todo -></a>`;
        // Crea un elemento <ul> para los productos y agrega sus detalles
        const listaProductos = document.createElement('ul');
        listaProductos.classList.add("producto__lista");
        categoria.productos.forEach(producto => {
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
        // Agrega la lista de productos al contenedor de la categoría
        contenedorProductos.appendChild(contenedorCategoria);
        contenedorProductos.appendChild(listaProductos);
        // Agrega el contenedor de la categoría al contenedor principal
      });
  })
  .catch(error => console.log(error));