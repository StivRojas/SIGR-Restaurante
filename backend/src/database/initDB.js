const db = require('../config/db');

function initializeDatabase() {

    db.serialize(() => {

        // TABLA USUARIOS
        db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            rol TEXT NOT NULL
        )
        `);

        // TABLA MENU
        db.run(`
        CREATE TABLE IF NOT EXISTS menu (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            descripcion TEXT,
            precio REAL NOT NULL,
            categoria TEXT NOT NULL
        )
        `);

        // TABLA RESERVAS
        db.run(`
        CREATE TABLE IF NOT EXISTS reservas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente TEXT NOT NULL,
            fecha TEXT NOT NULL,
            hora TEXT NOT NULL,
            personas INTEGER NOT NULL
        )
        `);

        // TABLA PEDIDOS
        db.run(`
        CREATE TABLE IF NOT EXISTS pedidos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            cliente TEXT NOT NULL,
            mesa INTEGER NOT NULL,
            total REAL DEFAULT 0,
            estado TEXT DEFAULT 'Pendiente',
            fecha DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `);

        console.log('Tablas verificadas correctamente');
    });
}

module.exports = initializeDatabase;