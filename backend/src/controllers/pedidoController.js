const db = require('../config/db');

// LISTAR TODOS
const getAll = (req, res) => {

    db.all(
        'SELECT * FROM pedidos ORDER BY fecha DESC',
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
        'SELECT * FROM pedidos WHERE id = ?',
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    mensaje: 'Pedido no encontrado'
                });
            }

            res.json(row);
        }
    );
};

// CREAR
const create = (req, res) => {

    const {
        cliente,
        mesa,
        total
    } = req.body;

    db.run(
        `
        INSERT INTO pedidos
        (cliente, mesa, total)
        VALUES (?, ?, ?)
        `,
        [
            cliente,
            mesa,
            total
        ],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                mensaje: 'Pedido creado',
                id: this.lastID
            });
        }
    );
};

// CAMBIAR ESTADO
const updateStatus = (req, res) => {

    const { id } = req.params;

    const { estado } = req.body;

    db.run(
        `
        UPDATE pedidos
        SET estado = ?
        WHERE id = ?
        `,
        [estado, id],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Estado actualizado'
            });
        }
    );
};

// ELIMINAR
const remove = (req, res) => {

    const { id } = req.params;

    db.run(
        `
        DELETE FROM pedidos
        WHERE id = ?
        `,
        [id],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Pedido eliminado'
            });
        }
    );
};

module.exports = {
    getAll,
    getById,
    create,
    updateStatus,
    remove
};