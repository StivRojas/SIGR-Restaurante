const express = require('express');

const router = express.Router();

const menuController =
require('../controllers/menuController');

// GET TODOS
router.get(
    '/',
    menuController.getAll
);

// GET POR ID
router.get(
    '/:id',
    menuController.getById
);

// POST
router.post(
    '/',
    menuController.create
);

// PUT
router.put(
    '/:id',
    menuController.update
);

// DELETE
router.delete(
    '/:id',
    menuController.remove
);

module.exports = router;