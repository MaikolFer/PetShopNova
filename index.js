const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const corsOptions = {
  origin: 'https://pet-shop-nova.vercel.app',
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));

const productos = [
  { id: 1, nombre: "Comida para Perros", descripcion: "Nutrición completa y balanceada.", img: "Images/comida_perros.webp" },
  { id: 2, nombre: "Cama para Perros", descripcion: "Comodidad para tu mascota.", img: "Images/cama_perros.webp" },
  { id: 3, nombre: "Comida para Gatos", descripcion: "Nutrición completa y balanceada.", img: "Images/comida_gatos.webp" },
  { id: 4, nombre: "Juguete para Perros", descripcion: "Horas y horas de diversión.", img: "Images/juguete_perros.webp" },
  { id: 5, nombre: "Juguete para Gatos", descripcion: "Diversión asegurada.", img: "Images/juguete_gatos.webp" },
  { id: 6, nombre: "Gimnasio para Gatos", descripcion: "Entretenimiento único.", img: "Images/gimnasio_gatos.webp" },
];

app.get('/api/productos', (req, res) => {
  res.json(productos);
});

app.use(express.static('Images'));

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

