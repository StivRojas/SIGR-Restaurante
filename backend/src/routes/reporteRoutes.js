const express = require('express');

const router = express.Router();

const reporteController =
require('../controllers/reporteController');

const authMiddleware =
require('../middleware/authMiddleware');

const authorize =
require('../middleware/roleMiddleware');


// REPORTE DE VENTAS
router.get(
    '/ventas',
    authMiddleware,
    authorize('Administrador'),
    reporteController.ventas
);

// REPORTE DE RESERVAS
router.get(
    '/reservas',
    authMiddleware,
    authorize('Administrador'),
    reporteController.reservas
);

module.exports = router;