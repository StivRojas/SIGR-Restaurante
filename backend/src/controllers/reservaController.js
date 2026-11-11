const db = require('../config/db');

// LISTAR
const getAll = (req, res) => {

    db.all(
        'SELECT * FROM reservas',
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
        'SELECT * FROM reservas WHERE id = ?',
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    mensaje: 'Reserva no encontrada'
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
        fecha,
        hora,
        personas
    } = req.body;

    db.run(
        `INSERT INTO reservas
        (cliente, fecha, hora, personas)
        VALUES (?, ?, ?, ?)`,
        [
            cliente,
            fecha,
            hora,
            personas
        ],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(201).json({
                mensaje: 'Reserva creada',
                id: this.lastID
            });
        }
    );
};

// ACTUALIZAR
const update = (req, res) => {

    const { id } = req.params;

    const {
        cliente,
        fecha,
        hora,
        personas
    } = req.body;

    db.run(
        `UPDATE reservas
         SET cliente=?,
             fecha=?,
             hora=?,
             personas=?
         WHERE id=?`,
        [
            cliente,
            fecha,
            hora,
            personas,
            id
        ],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Reserva actualizada'
            });
        }
    );
};

// ELIMINAR
const remove = (req, res) => {

    const { id } = req.params;

    db.run(
        'DELETE FROM reservas WHERE id = ?',
        [id],
        function(err){

            if(err){
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                mensaje: 'Reserva eliminada'
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
