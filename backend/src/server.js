require('dotenv').config();

const express = require('express');
const cors = require('cors');

const initializeDatabase =
require('./database/initDB');

const authRoutes =
require('./routes/authRoutes');

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor ejecutándose en puerto ${PORT}`
    );

});