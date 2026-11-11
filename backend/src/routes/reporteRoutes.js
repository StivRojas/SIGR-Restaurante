const express = require('express');

const router = express.Router();

const reporteController =
require('../controllers/reporteController');

router.get(
    '/ventas',
    reporteController.ventas
);

router.get(
    '/reservas',
    reporteController.reservas
);

module.exports = router;