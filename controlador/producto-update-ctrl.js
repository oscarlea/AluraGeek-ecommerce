import { services } from "../service/services.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("ve a ver que haces aqui #1");
  }

  const id_categoria = document.querySelector("[data-id_categoria]");
  const nombre =       document.querySelector("[data-nombre]");
  const precio =       document.querySelector("[data-precio]");
  const imagen =       document.querySelector("[data-imagen]");
  const descripcion =  document.querySelector("[data-descripcion]");
  
  try {
    const producto = await services.readProducto(id);
    if (producto.id_categoria, producto.nombre, producto.precio, producto.imagen, producto.descripcion) {
      id_categoria.value = parseInt(producto.id_categoria);
      nombre.value = producto.nombre;
      precio.value = parseInt( producto.precio);
      imagen.value = producto.imagen;
      descripcion.value = producto.descripcion;
    } else {
      throw new Error();
    }
  } catch (error) {
    alert("ya #2");
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  
  const id_categoria = parseInt(document.querySelector("[data-id_categoria]").value);
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = parseInt(document.querySelector("[data-precio]").value);
  const imagen = document.querySelector("[data-imagen]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
   
  services.updatedProducto(id, id_categoria, nombre, precio, imagen, descripcion).then(() => {
  formulario.reset();

  window.location.href = "productos.html"; 

  });
});
