En esta página podemos encontrar varios elementos relevantes para el desarrollo web. 

My JSON Server

My JSON Server es una herramienta útil para crear una API REST a partir de archivos JSON alojados en un repositorio GitHub, aunque tiene algunas limitaciones como la simulación de cambios y la caché de solicitudes. 

Funcion UUID

Por otro lado, utiliza una función propia de generación de UUID. Nos da más control y estabilidad en comparación con depender de un CDN.

IconMoon

IcoMoon es una herramienta que nos permite crear una biblioteca de iconos personalizada y liviana para nuestra página web, lo que nos brinda mayor flexibilidad y personalización en el uso de iconos. Además, podemos almacenar la biblioteca localmente para un acceso más rápido.

ImgBB

Imgbb es una plataforma de alojamiento de imágenes que ofrece una API fácil de usar y funciones avanzadas de compresión y edición de imágenes, lo que permite a los usuarios ajustar y optimizar sus imágenes antes de compartirlas en línea.

Por último, es importante tener en cuenta que esta página incluye elementos que pueden no ser compatibles con versiones antiguas de navegadores, como la propiedad "gap" en CSS, entre otras.

--------------------------------------------------------------------------------------------------------------

El desafío

Edición #4: Challenge ONE Front-end.
Sprint 02 - AluraGeek: Creando tu proprio e-commerce.

¡Construirás un e-commerce usando HTML, CSS y Javascript, con soporte especializado a través de Discord.

Historia

La empresa AluraGeek necesita llegar a más clientes y aumentar su nivel de ventas, por lo que
 quieren implementar un e-commerce, llevar a la empresa al siguiente nivel y volverse más digital.

Para ello están pidiendo nuestra ayuda como desarrolladores, el e-commerce debe contener los siguientes requisitos:

Requisitos:

Una página de inicio que contiene un botón de inicio de sesión y un motor de búsqueda de productos 
ofrecidos por la empresa.

- Un banner que contenga descuentos, promociones o informaciónes relevante del momento.
- Una galería con información del producto, como imagen, nombre del producto, precio y un enlace a la 
  página de descripción del producto.
- Una página de producto que contiene la imagen, el nombre, la descripción y el precio.
- Un pie de página con un formulario de contacto y otras informaciónes relevantes.
- Un formulário de iniciar sesión para autenticar a los usuarios que quieran acceder al menu 
  administrador.
- Menú de administrador para que puedan agregar, editar, buscar o eliminar productos de la tienda.

Es muy importante que el sitio sea adaptable para que los clientes puedan comprar fácilmente a través 
de dispositivos móviles.

Importante: Todas las imágenes estarán disponibles en Figma para su descarga.

Trabajaremos con el sistema de desarrollo ágil, utilizando el Trello de la siguiente manera:

- La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
- En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar 
  una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
- En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar 
  por algún motivo.
- Por fin, en la columna Concluido estarán los elementos ya concluidos.

El Trello es una herramienta de uso individual para que puedas controlar el progreso de tus actividades, 
pero no será evaluada.

Buen proyecto!
--------------------------------------------------------------------------------------------------------

Elementos principales de la página

    Título de su sitio web
    Menú principal
    Buscador de artículos
    Botón de inicio de sesión
    Banner
    Galería de productos
    Formulario de contacto
    Rodapié

--------------------------------------------------------------------------------------------------------

Entrega de desafíos y creación de portafolios

Ahora puedes enviar tu proyecto y ganar tu insignia exclusiva para este desafío siguiendo 
los siguientes pasos:

- Publica tu proyecto en GitHub
- Publica tu proyecto también en GitHub Pages:¿Cómo publicar mi proyecto con GitHub Pages?
- Agregua el hashtag:

        Grupo 4 "challengeonealurageeklatam4" en la parte de "Temas", dentro del engranaje 
        que aparece en "Acerca de" de tu repositorio de GitHub.

- Completa el formulario de envío con el link del proyecto publicado con GitHub Pages Link 
  al formulario : 


  los challenges se pueden entregar hasta el final de la formación, pero recomiendan ir llevando a tiempo junto con cada parte de la formación, por ej el alura geek tiene fecha recomendada hasta el 3 de abril que es cuando se libera react...

-------------------------------------------------------------------------------------------------------------
  
Estructura de datos JSON ;

{
  "categorias": [
    {
      "id": 1,
      "nombre": "Carteras"
    },
    {
      "id": 2,
      "nombre": "Anillos"
    },
    {
      "id": 3,
      "nombre": "Otros productos"
    },
    {
      "id": 4,
      "nombre": "asdasd"
    }
  ],
  "productos": [
    {
      "id": 3,
      "id_categoria": 1,
      "nombre": "Porta celular",
      "precio": 12000,
      "imagen": "img/productos/cartera-003.jpg",
      "descripcion": "sdfjlsjljdfs"
    },
    {
      "id": 4,
      "id_categoria": 1,
      "nombre": "Cartera",
      "precio": 11000,
      "imagen": "img/productos/cartera-002.jpg",
      "descripcion": "sdfjlsjljdfs"
    }
  ]
}



