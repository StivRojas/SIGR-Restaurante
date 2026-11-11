const express = require('express');

const router = express.Router();

const reservaController =
require('../controllers/reservaController');

const authMiddleware =
require('../middleware/authMiddleware');

const authorize =
require('../middleware/roleMiddleware');


// VER RESERVAS
router.get(
    '/',
    authMiddleware,
    authorize(
        'Administrador',
        'Mesero'
    ),
    reservaController.getAll
);

// VER RESERVA
router.get(
    '/:id',
    authMiddleware,
    reservaController.getById
);

// CREAR RESERVA
router.post(
    '/',
    authMiddleware,
    authorize(
        'Administrador',
        'Mesero',
        'Cliente'
    ),
    reservaController.create
);

// ACTUALIZAR RESERVA
router.put(
    '/:id',
    authMiddleware,
    authorize(
        'Administrador',
        'Mesero'
    ),
    reservaController.update
);

// ELIMINAR RESERVA
router.delete(
    '/:id',
    authMiddleware,
    authorize('Administrador'),
    reservaController.remove
);

module.exports = router;