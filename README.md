# PulgaStore

PulgaStore es un proyecto de front-end para un sitio de comercio electrónico. La tienda se especializa en la venta de accesorios únicos como bolsos, carteras y mochilas, todos confeccionados con materiales reciclados. El objetivo del proyecto es ofrecer una interfaz de usuario clara, atractiva y funcional.

## Características Principales

El proyecto está compuesto por tres páginas principales:

1.  **Página de Inicio (`index.html`)**:

    - Presenta la marca y su filosofía de reciclaje.
    - Muestra una galería con las categorías de productos disponibles.
    - Incluye una sección de Preguntas Frecuentes (FAQ) interactiva.

2.  **Página de Pedidos (`pages/pedidos.html`)**:

    - Diseñada para la administración de pedidos.
    - Muestra una tabla con datos de pedidos cargados desde un archivo `pedidos.json`.
    - Utiliza el plugin DataTables para ofrecer funcionalidades de paginación, búsqueda y ordenamiento.
    - Permite eliminar pedidos de la tabla.

3.  **Página de Contacto (`pages/contacto.html`)**:
    - Contiene un formulario de contacto para que los usuarios puedan comunicarse.
    - Incluye validación de campos en tiempo real para asegurar que la información ingresada sea correcta.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura semántica del contenido.
- **CSS3**: Para el diseño y la presentación visual.
- **Bootstrap 5**: Framework de CSS para un diseño responsivo y componentes predefinidos.
- **JavaScript**: Para la interactividad y la lógica del lado del cliente.
- **jQuery y jQuery UI**: Para la manipulación del DOM y la creación de componentes interactivos como el acordeón de FAQ.
- **DataTables**: Plugin de jQuery para la creación de tablas de datos avanzadas.

## Estructura del Proyecto

El proyecto se organiza en las siguientes carpetas:

- `assets/`: Contiene los recursos estáticos.
  - `img/`: Imágenes y logos.
  - `styles/`: Hojas de estilo CSS.
- `data/`: Almacena archivos de datos, como `pedidos.json`.
- `js/`: Contiene los archivos de JavaScript.
- `pages/`: Incluye las páginas HTML adicionales del sitio.

## Cómo Empezar

Para visualizar el proyecto, simplemente clona este repositorio y abre el archivo `index.html` en tu navegador web preferido.

```bash
git clone <url-del-repositorio>
cd <nombre-del-directorio>
# Abre index.html en el navegador
```

## Desarrollado por

Valentina Troncoso Molina

vtroncosomolina@gmail.com
