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
          productos: productos.filter(producto => producto.id_categoria === categoria.id)
        }
      });
      return productosPorCategoria;
    })
    .catch(error => console.log(error));
};
/* --- --- --- --- -----------------------------------------------------------------------*/
const listaProductos = () =>
  fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());
/* -------------------------------------------------------------------------------------- */

/* const consultaPorId = () => {
return fetch('http://localhost:3000/productos/1')
  .then(response => response.json())
  .then(data => {
    // Manipular los datos recibidos, por ejemplo:
    console.log(data.id);
    console.log(data.nombre);
    console.log(data.precio);
  })
  .catch(error => console.error(error));
} */

const getProducto = async (id) =>  {
  try {
    const response = await fetch(`http://localhost:3000/productos/${id}`);
    const data = await response.json();
/*     console.log(data.id);
    console.log(data.id_categoria);
    console.log(data.nombre);
    console.log(data.precio);
    console.log(data.imagen);
 */    return data;
  } catch (error) {
    console.error(error);
  }
}
/* getProduct(1); */
/* -------------------------------------------------------------------------------------- */
// Productos de una categoria

const productosDeUnaCategoria = async (id_categoria) => {
  try {
    const response = await fetch(`http://localhost:3000/productos?id_categoria=${id_categoria}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// http://localhost:3000/productos?id_categoria=1
/* --- --- --- --- -----------------------------------------------------------------------*/
const dataDelCono = () => {
  return fetch('../db.json')
    .then(response => response.json())
    .then(data => {
      const categorias = data.categorias;
      const productos = data.productos;
      const productosPorCategoria = categorias.map(categoria => {
        return {
          categoria: categoria.nombre,
          productos: productos.filter(producto => producto.id_categoria === categoria.id)
        }
      });
      return productosPorCategoria;
    });
}
/* --- --- --- --- -----------------------------------------------------------------------*/
const nuevoRegistroProducto = (id_categoria, nombre, precio, imagen) => {
  return fetch('http://localhost:3000/productos', { 
  /* return fetch('../db.json', {     */
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: uuid.v4(), id_categoria, nombre, precio, imagen})
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
};
/* -----------------------------------------------------------------------------------*/
const imbgg = (imageData) => {
return fetch('https://api.imgbb.com/1/upload?key=2e19dc41ed6f9adfef9db4e153ec1592', {
        method: 'POST',
        body: imageData
      }).then(response => response.json())
        .then(data => {
          const imageUrl = data.data.url;
          return imageUrl;
          // Aquí puedes hacer algo con la URL de la imagen cargada
        })
        .catch(error => console.error(error));
};


export const services = {
  listaProductosPorCategoria,
  listaProductos,
  dataDelCono,
  nuevoRegistroProducto,
  imbgg,
  getProducto,
  productosDeUnaCategoria,
};
