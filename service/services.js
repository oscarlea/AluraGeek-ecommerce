const listaProductosPorCategoria = () => {
  return Promise.all([
    fetch('http://localhost:3000/categorias'),
    fetch('http://localhost:3000/productos')
  ])
    .then(responses => Promise.all(responses.map(response => response.json())))
    .then(data => {
      const categorias = data[0];
      const productos = data[1];
      const productosPorCategoria = categorias.map(categoria => {
        return {
          categoria: categoria.nombre,
          productos: productos.filter(producto => producto.categoria_id === categoria.id)
        }
      });
      return productosPorCategoria;
    })
    .catch(error => console.log(error));
};

/* --- */

const listaProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

/* --- */

const dataDelCono = () => {
  return fetch('../db.json')
    .then(response => response.json())
    .then(data => {
      const categorias = data.categorias;
      const productos = data.productos;
      const productosPorCategoria = categorias.map(categoria => {
        return {
          categoria: categoria.nombre,
          productos: productos.filter(producto => producto.categoria_id === categoria.id)
        }
      });
      return productosPorCategoria;
    });
}

/* --- */

export const services = {
  listaProductosPorCategoria,
  listaProductos,
  dataDelCono,
};
