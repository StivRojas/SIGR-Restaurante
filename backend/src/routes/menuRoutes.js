const express = require('express');

const router = express.Router();

const menuController =
require('../controllers/menuController');

const authMiddleware =
require('../middleware/authMiddleware');

const authorize =
require('../middleware/roleMiddleware');

//////
// VER TODOS
router.get(
    '/',
    menuController.getAll
);

// VER POR ID
router.get(
    '/:id',
    menuController.getById
);

// CREAR PLATO
router.post(
    '/',
    authMiddleware,
    authorize('Administrador'),
    menuController.create
);

// ACTUALIZAR PLATO
router.put(
    '/:id',
    authMiddleware,
    authorize('Administrador'),
    menuController.update
);

// ELIMINAR PLATO
router.delete(
    '/:id',
    authMiddleware,
    authorize('Administrador'),
    menuController.remove
);


//////
// Put
router.post(
    '/',
    authMiddleware,
    menuController.create
);

// PUT ID
router.put(
    '/:id',
    authMiddleware,
    menuController.update
);

//Delete 
router.delete(
    '/:id',
    authMiddleware,
    menuController.remove
);

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