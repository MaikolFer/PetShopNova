# PetShopNova

PetShopNova es una plataforma de productos para mascotas moderna y fácil de usar, diseñada para brindar la mejor experiencia de compra en línea. Nuestro objetivo es ofrecer una amplia variedad de productos para tus amigos peludos, asegurando una compra segura y eficiente para el cliente.

Con PetShopNova, los usuarios podrán disfrutar de una experiencia de compra fluida, con opciones personalizadas que se adaptan a sus necesidades.

## Características implementadas

- **Página de inicio** con productos destacados que se cargan dinámicamente desde una API.
- **Diseño moderno y responsivo**, adaptado para dispositivos móviles y de escritorio, utilizando **CSS Grid**, **Flexbox** y **media queries**.
- **Imágenes de productos de alta calidad**, optimizadas para una carga rápida.
- **Carrito de compras simulado**: los usuarios pueden agregar productos al carrito (sin funcionalidad de pago en esta versión).
- **Formulario de contacto** con validación de campos para enviar mensajes a los administradores del sitio.
- **Interacción con el backend**: integrando el frontend con el backend utilizando **Node.js**, con rutas API para manejar productos y el carrito.
- **Estructura de navegación clara** con enlaces visibles para acceder a las secciones principales del sitio, como el inicio, el carrito y el contacto.
- **Estilo profesional** con una paleta de colores atractiva, tipografía adecuada y elementos interactivos como botones de llamada a la acción.
- **Optimización para la accesibilidad**, asegurando que los elementos sean fáciles de usar para personas con discapacidades visuales y motrices.
- **Cargar productos dinámicamente** desde el servidor usando JavaScript y técnicas AJAX para una experiencia más fluida.
- **Backend en Node.js** que gestiona la lógica del servidor, incluyendo la entrega de productos y la interacción con la base de datos (o un archivo simulado en esta versión).
- **Validación de formularios** tanto en el lado del cliente (frontend) como en el servidor (backend), asegurando que los datos enviados sean correctos.
- **Gestión de dependencias** con **npm**, facilitando la instalación y actualización de las bibliotecas utilizadas en el proyecto.

## Estructura del proyecto

- **index.html**: Página principal que presenta los productos y el contenido principal del sitio.
- **style.css**: Archivo de estilos que define el diseño y la presentación del sitio.
- **script.js**: Archivo JavaScript que maneja la lógica del frontend (como la interacción con el carrito y el formulario de contacto).
- **index.js**: Lógica del backend para gestionar la API y las solicitudes del servidor.
- **node_modules/**: Directorio que contiene las dependencias del proyecto (instaladas con npm).
- **package.json**: Archivo de configuración de npm, que lista las dependencias del proyecto y los scripts de ejecución.
- **package-lock.json**: Archivo generado automáticamente para garantizar que las dependencias sean instaladas en la versión exacta.
- **images/**: Carpeta que contiene todas las imágenes utilizadas en el sitio web, incluidas las imágenes de productos.
- **README.md**: Este archivo, que proporciona detalles sobre el proyecto.


## Instrucciones de instalación y despliegue

### Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu máquina:

- **Node.js**: Asegúrate de tener Node.js y npm (Node Package Manager) instalados.
- **Git**: Necesitarás Git para clonar el repositorio.

### Pasos para instalar y ejecutar el proyecto localmente

1. **Clonar el repositorio**:

   Abre una terminal y ejecuta el siguiente comando para clonar el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/MaikolFEr/PetShopNova.git

Acceder al directorio del proyecto:

Una vez clonado el repositorio, accede al directorio del proyecto:

Copy code
cd PetShopNova
Instalar las dependencias:

Asegúrate de estar en el directorio del proyecto y luego ejecuta el siguiente comando para instalar todas las dependencias necesarias con npm:

Copy code
npm install
Este comando descargará e instalará todas las dependencias definidas en el archivo package.json.

Configurar el entorno de desarrollo:

Si el proyecto usa alguna configuración adicional para el desarrollo (como variables de entorno o configuraciones específicas), asegúrate de definirlas. Esto puede incluir la configuración de una base de datos o una API de productos.

Ejecutar el servidor localmente:

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo utilizando el siguiente comando:

Copy code
npm start
Esto iniciará el servidor localmente en el puerto 3000 (por defecto). Accede a la aplicación desde tu navegador en:

Copy code
http://localhost:3000

## Despliegue en un servidor de producción

Desplegar en un servidor:

-Si estás utilizando un servicio como Heroku, Netlify, o Vercel, sigue las instrucciones específicas de cada plataforma para desplegar el proyecto desde tu repositorio de GitHub.
-Si estás desplegando en tu propio servidor, sube la carpeta build generada a tu servidor y asegúrate de configurar el servidor (por ejemplo, usando Nginx o Apache) para servir los archivos estáticos y configurar la parte del backend si es necesario.
Acceder al proyecto en producción:

Una vez desplegado, podrás acceder a la aplicación a través de la URL proporcionada por tu servidor o plataforma de despliegue.


## Autor

Maikol Fernandez.
