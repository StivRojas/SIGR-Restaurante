const db = require('../config/db');

const ventas = (req, res) => {

    db.get(
        `
        SELECT
            COUNT(*) as totalPedidos,
            SUM(total) as ingresos
        FROM pedidos
        `,
        [],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(row);
        }
    );
};

const reservas = (req, res) => {

    db.get(
        `
        SELECT COUNT(*) as totalReservas
        FROM reservas
        `,
        [],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json(row);
        }
    );
};

module.exports = {
    ventas,
    reservas
};