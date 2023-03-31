const binUrl = "https://api.jsonbin.io/v3/b/642635cac0e7653a059a4681/"

/* -------------------------------------------------------------------------------------- */

const readProducto = async (id) =>  {
  try {
    const response = await fetch(binUrl, {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$ayFtMielrRIt1PkcU5fwfeF9z/QqV5.ql6pmJ3WiTMMImXnpdcXt6",
        "X-Access-Key": "$2b$10$xJwM6.qEIVcb9o87pxFLFeKvbwJCPspv/SJ9cdKUhdtR42ePi3d7y",
        "X-JSON-Path":  `$.productos[?(@.id == '${id}')]`
      }
    });
    const data = await response.json();
      return data.record[0];
    } catch (error) {
    console.error(error);
  }
}

/* -------------------------------------------------------------------------------------- */

const listaProductosPorCategoria = () => {

  return fetch(binUrl, {
    method: "GET",
    headers: {
      "X-Master-Key": "$2b$10$ayFtMielrRIt1PkcU5fwfeF9z/QqV5.ql6pmJ3WiTMMImXnpdcXt6",
      "X-Access-Key": "$2b$10$xJwM6.qEIVcb9o87pxFLFeKvbwJCPspv/SJ9cdKUhdtR42ePi3d7y",
      "X-JSON-Path": "$.*"
    }
  })
  .then(response => response.json())
  .then(data => {
    const categorias = data.record[0];
    const productos = data.record[1];
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
  fetch(binUrl, {
    method: "GET",
    headers: {
      "X-Master-Key": "$2b$10$ayFtMielrRIt1PkcU5fwfeF9z/QqV5.ql6pmJ3WiTMMImXnpdcXt6",
      "X-Access-Key": "$2b$10$xJwM6.qEIVcb9o87pxFLFeKvbwJCPspv/SJ9cdKUhdtR42ePi3d7y",
      "X-JSON-Path":  `$.productos`
    }
  })
  .then((respuesta) => respuesta.json())
  .then((datos) => datos.record[0]);
  
/* -------------------------------------------------------------------------------------- */

// Productos de una categoria

const productosDeUnaCategoria = async (id_categoria) => {
  try {
    const response = await fetch(binUrl, {
      method: "GET",
      headers: {
        "X-Master-Key": "$2b$10$ayFtMielrRIt1PkcU5fwfeF9z/QqV5.ql6pmJ3WiTMMImXnpdcXt6",
        "X-Access-Key": "$2b$10$xJwM6.qEIVcb9o87pxFLFeKvbwJCPspv/SJ9cdKUhdtR42ePi3d7y",
        "X-JSON-Path":  `$.productos[?(@.id_categoria == ${id_categoria})]`
      }
    });
    const data = await response.json();
    return data.record;
  } catch (error) {
    console.error(error);
  }
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
  readProducto,
  listaProductosPorCategoria,
  listaProductos,
  imbgg,
  productosDeUnaCategoria,
};
