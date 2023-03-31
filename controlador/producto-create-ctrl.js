import { services } from "../service/services.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const imageData = new FormData();
    imageData.append('image', window.archivo);  

    services
    .imbgg(imageData) 
    .then((imageUrl) => {
        const id_categoria = parseInt( document.querySelector("[data-id-categoria]").value);
        const nombre = document.querySelector("[data-nombre]").value;
        const imagen = imageUrl
        const precio = parseInt(document.querySelector("[data-precio]").value);
        const descripcion = document.querySelector("[data-descripcion]").value; 
        
        services
            .createProducto(id_categoria, nombre, precio, imagen, descripcion) 
            .then(() => {
                formulario.reset();
            })
            .catch((err) => console.log("ctrl -> " + err));
    })
    .catch((err) => console.log("ctrl -> " + err));
});
