const db = require('../config/db');

// LISTAR TODOS
const getAll = (req, res) => {

    db.all(
        'SELECT * FROM menu',
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(rows);
        }
    );
};

// BUSCAR POR ID
const getById = (req, res) => {

    const { id } = req.params;

    db.get(
        'SELECT * FROM menu WHERE id = ?',
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    mensaje: 'Plato no encontrado'
                });
            }

            res.json(row);
        }
    );
};

// CREAR
const create = (req, res) => {

    const {
        nombre,
        descripcion,
        precio,
        categoria
    } = req.body;

    db.run(
        `INSERT INTO menu
        (nombre, descripcion, precio, categoria)
        VALUES (?, ?, ?, ?)`,
        [
            nombre,
            descripcion,
            precio,
            categoria
        ],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                mensaje: 'Plato creado',
                id: this.lastID
            });
        }
    );
};

// ACTUALIZAR
const update = (req, res) => {

    const { id } = req.params;

    const {
        nombre,
        descripcion,
        precio,
        categoria
    } = req.body;

    db.run(
        `UPDATE menu
        SET nombre = ?,
            descripcion = ?,
            precio = ?,
            categoria = ?
        WHERE id = ?`,
        [
            nombre,
            descripcion,
            precio,
            categoria,
            id
        ],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Plato actualizado'
            });
        }
    );
};

// ELIMINAR
const remove = (req, res) => {

    const { id } = req.params;

    db.run(
        'DELETE FROM menu WHERE id = ?',
        [id],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Plato eliminado'
            });
        }
    );
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};