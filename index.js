const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const productos = [
  { id: 1, nombre: "Comida para Perros", descripcion: "Nutrición completa y balanceada.", img: "images/comida_perros.webp" },
  { id: 2, nombre: "Cama para Perros", descripcion: "Comodidad para tu mascota.", img: "images/cama_perros.webp" },
  { id: 3, nombre: "Comida para Gatos", descripcion: "Nutrición completa y balanceada.", img: "images/comida_gatos.webp" },
  { id: 4, nombre: "Juguete para Perros", descripcion: "Horas y horas de diversión.", img: "images/juguete_perros.webp" },
  { id: 5, nombre: "Juguete para Gatos", descripcion: "Diversión asegurada.", img: "images/juguete_gatos.webp" },
  { id: 6, nombre: "Gimnasio para Gatos", descripcion: "Entretenimiento único.", img: "images/gimnasio_gatos.webp" }
];

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.use(express.static('images'));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});