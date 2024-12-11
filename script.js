const productos = [
    {
      nombre: "Comida para Perros",
      descripcion: "Nutrición completa y balanceada.",
      imagen: "Images/comida_perros.webp",
    },
    {
      nombre: "Cama para Perros",
      descripcion: "Comodidad para tu mascota.",
      imagen: "Images/cama_perros.webp",
    },
    {
      nombre: "Comida para Gatos",
      descripcion: "Nutrición completa y balanceada.",
      imagen: "Images/comida_gatos.webp",
    },
    {
      nombre: "Juguete para Perros",
      descripcion: "Horas y horas de diversión para tu peludo.",
      imagen: "Images/juguete_perros.webp",
    },
    {
      nombre: "Juguete para Gatos",
      descripcion: "Diversión asegurada para tu mascota.",
      imagen: "Images/juguete_gatos.webp",
    },
    {
      nombre: "Gimnasio para Gatos",
      descripcion: "Entretenimiento único para tus gatos.",
      imagen: "Images/gimnasio_gatos.webp",
    },
  ];
  
  const contenedorProductos = document.querySelector(".grid-productos");
  productos.forEach((producto) => {
    const productoHTML = `
      <article class="producto">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <button>Añadir al carrito</button>
      </article>
    `;
    contenedorProductos.innerHTML += productoHTML;
  });
  
  // Validar formulario de contacto
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();
  
    if (!nombre || !correo || !mensaje) {
      alert("Todos los campos son obligatorios.");
      return;
    }
  
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      alert("Por favor, ingrese un correo válido.");
      return;
    }
  
    alert("Formulario enviado correctamente.");
    formulario.reset();
  });
  
  // Añadir al carrito
  contenedorProductos.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productoNombre = event.target.parentElement.querySelector("h3").textContent;
      alert(`${productoNombre} añadido al carrito.`);
    }
  });
  