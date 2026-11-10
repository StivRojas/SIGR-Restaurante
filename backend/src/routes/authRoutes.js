const express = require('express');

const router = express.Router();

const authController =
require('../controllers/authController');

const authMiddleware =
require('../middleware/authMiddleware');

// REGISTER
router.post(
    '/register',
    authController.register
);

// LOGIN
router.post(
    '/login',
    authController.login
);

// PROFILE
router.get(
    '/profile',
    authMiddleware,
    (req, res) => {

        res.json({
            usuario: req.user
        });

    }
);

module.exports = router;