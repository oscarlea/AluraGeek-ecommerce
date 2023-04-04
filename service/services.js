/* const baseURL = 'https://api.npoint.io/17ec4660e2004cca6813';   */
/* const baseURL = 'http://192.168.0.10:3000';   */
/* const baseURL = 'https://my-json-server.typicode.com/oscarlea/AluraJSON';  */

const baseURL = 'https://alura-geek-ecommerce-mu.vercel.app/'; 

/* -----------------------------------------------------------------------------------*/

const createProducto = (id_categoria, nombre, precio, imagen, descripcion) => {
  return fetch(baseURL + '/productos', { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: generateUUID(), id_categoria, nombre, precio, imagen, descripcion})
  })
  .then(response => response.json())
  /* .then(data => console.log(data)) */
  .catch(error => console.error(error));
};

/* -------------------------------------------------------------------------------------- */

const readProducto = async (id) =>  {
  try {
    const response = await fetch(baseURL + `/productos/${id}`);
    const data = await response.json();
      return data;
    } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------------------- */

const updatedProducto = (id, id_categoria, nombre, precio, imagen, descripcion) => {
  return fetch(baseURL + `/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id_categoria, nombre, precio, imagen, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

/* -------------------------------------------------------------------------------------- */

const deleteProducto = (id) => {
  return fetch(baseURL + `/productos/${id}`, {
    method: "DELETE",
  });
};

/* -------------------------------------------------------------------------------------- */

const listaProductosPorCategoria = () => {
  return Promise.all([
    
    fetch(baseURL + '/categorias'),
    fetch(baseURL + '/productos')
    
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

/* -------------------------------------------------------------------------------------- */

const listaProductos = () =>
  fetch(baseURL + "/productos").then((respuesta) => respuesta.json()); 

/* -------------------------------------------------------------------------------------- */

// Productos de una categoria

const productosDeUnaCategoria = async (id_categoria) => {
  try {
    const response = await fetch(baseURL + `/productos?id_categoria=${id_categoria}`);
    const data = await response.json();
/*     console.log(data);  */
    return data;
  } catch (error) {
    console.error(error);
  }
}

/* -----------------------------------------------------------------------------------*/

const dataPruebas = () => {
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

/* -----------------------------------------------------------------------------------*/

export const services = {
  createProducto,
  readProducto,
  updatedProducto,
  deleteProducto,
  listaProductosPorCategoria,
  listaProductos,
  dataPruebas,
  imbgg,
  productosDeUnaCategoria,
};
