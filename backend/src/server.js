require('dotenv').config();

const express = require('express');
const cors = require('cors');

const initializeDatabase =
require('./database/initDB');

const menuRoutes =
require('./routes/menuRoutes');

const authRoutes =
require('./routes/authRoutes');

const reservaRoutes =
require('./routes/reservaRoutes');

const pedidoRoutes =
require('./routes/pedidoRoutes');

const reporteRoutes =
require('./routes/reporteRoutes');
console.log('Reportes cargados');

const app = express();

app.use(cors());
app.use(express.json());

initializeDatabase();

app.get('/', (req, res) => {

    res.json({
        mensaje: 'API SIGR funcionando correctamente'
    });

});

app.use('/api/auth', authRoutes);

app.use(
    '/api/menu',
    menuRoutes
);

app.use(
    '/api/reservas',
    reservaRoutes
);

app.use(
    '/api/pedidos',
    pedidoRoutes
);

app.use(
    '/api/reportes',
    reporteRoutes
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor ejecutándose en puerto ${PORT}`
    );

});

