const express = require('express');

const router = express.Router();

const pedidoController =
require('../controllers/pedidoController');

const authMiddleware =
require('../middleware/authMiddleware');

const authorize =
require('../middleware/roleMiddleware');


// VER PEDIDOS
router.get(
    '/',
    authMiddleware,
    pedidoController.getAll
);

router.get(
    '/:id',
    authMiddleware,
    pedidoController.getById
);

// CREAR PEDIDO
router.post(
    '/',
    authMiddleware,
    authorize(
        'Administrador',
        'Mesero'
    ),
    pedidoController.create
);

// CAMBIAR ESTADO
router.put(
    '/:id/estado',
    authMiddleware,
    authorize(
        'Administrador',
        'Mesero'
    ),
    pedidoController.updateStatus
);

// ELIMINAR PEDIDO
router.delete(
    '/:id',
    authMiddleware,
    authorize('Administrador'),
    pedidoController.remove
);

module.exports = router;