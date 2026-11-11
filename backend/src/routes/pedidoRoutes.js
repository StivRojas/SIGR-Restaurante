const express = require('express');

const router = express.Router();

const pedidoController =
require('../controllers/pedidoController');

router.get(
    '/',
    pedidoController.getAll
);

router.get(
    '/:id',
    pedidoController.getById
);

router.post(
    '/',
    pedidoController.create
);

router.put(
    '/:id/estado',
    pedidoController.updateStatus
);

router.delete(
    '/:id',
    pedidoController.remove
);

module.exports = router;