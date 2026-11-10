const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTRO
const register = async (req, res) => {
    try {

        const { nombre, email, password, rol } = req.body;

        if (!nombre || !email || !password || !rol) {
            return res.status(400).json({
                mensaje: 'Todos los campos son obligatorios'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.run(
            `INSERT INTO usuarios
            (nombre, email, password, rol)
            VALUES (?, ?, ?, ?)`,
            [nombre, email, hashedPassword, rol],
            function (err) {

                if (err) {
                    return res.status(400).json({
                        error: err.message
                    });
                }

                res.status(201).json({
                    mensaje: 'Usuario registrado correctamente',
                    id: this.lastID
                });
            }
        );

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }
};

// LOGIN
const login = (req, res) => {

    const { email, password } = req.body;

    db.get(
        `SELECT * FROM usuarios WHERE email = ?`,
        [email],
        async (err, usuario) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!usuario) {
                return res.status(404).json({
                    mensaje: 'Usuario no encontrado'
                });
            }

            const validPassword = await bcrypt.compare(
                password,
                usuario.password
            );

            if (!validPassword) {
                return res.status(401).json({
                    mensaje: 'Contraseña incorrecta'
                });
            }

            const token = jwt.sign(
                {
                    id: usuario.id,
                    email: usuario.email,
                    rol: usuario.rol
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '8h'
                }
            );

            res.json({
                mensaje: 'Login exitoso',
                token
            });
        }
    );
};

module.exports = {
    register,
    login
};