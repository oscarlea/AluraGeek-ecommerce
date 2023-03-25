import { services } from "../service/services.js";

/* const formData = new FormData(); */
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    /* const fileInput = document.querySelector("#fileInput"); */
    const imageData = new FormData();
    imageData.append('image', window.archivo);  
    //imageData.append('image', fileInput.files[0]);
    services
    .imbgg(imageData) 
    .then((imageUrl) => {
        /* const id = document.querySelector("[data-id]").value; */
        const id_categoria = parseInt( document.querySelector("[data-id-categoria]").value);
        const nombre = document.querySelector("[data-nombre]").value;
        const imagen = imageUrl
        const precio = parseInt(document.querySelector("[data-precio]").value);
    
        services
            .nuevoRegistroProducto(id_categoria, nombre, precio, imagen) 
            .then(() => {
                formulario.reset();
            })
            .catch((err) => console.log("ctrl -> " + err));
    })
    .catch((err) => console.log("ctrl -> " + err));
});

/* -------- Mostrar imagen en el contenedor ----------------------------------------- */

/* const fileInput = document.querySelector("#fileInput");
fileInput.addEventListener("change", () => {

    window.archivo = fileInput.files[0]

    var reader = new FileReader();
    var img = document.querySelector("#contenedor-imagen div img");
    reader.onload = function(e) {
      img.src = e.target.result;
    }
    reader.readAsDataURL(fileInput.files[0]);
});
 */