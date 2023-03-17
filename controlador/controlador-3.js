const nuevoProducto = (id, categoria_id, nombre, precio, imagen) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="categoria">
        <h2 class="categoria__titulo">Carteras</h2>
        <a href="#" class="categoria__link">Ver todo -&gt;</a>
    </div>

    <ul class="producto__lista">
        <li class="producto">
            <img class="producto__imagen" src="${imagen}" alt="Cartera">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">Precio: ${precio}</p>
        </li>
    </ul>`

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card
}

/* ver --->  https://www.youtube.com/watch?v=AwCXDIj8Apo   minuto 18:06  */

const productos = document.querySelector([''])