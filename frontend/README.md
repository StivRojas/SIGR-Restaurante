# 🍽️ SIGR
## Sistema Integral de Gestión de Restaurante

![React](https://img.shields.io/badge/React-19-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![SQLite](https://img.shields.io/badge/SQLite-Database-lightblue)
![JWT](https://img.shields.io/badge/JWT-Security-orange)
![GitHub](https://img.shields.io/badge/GitHub-VersionControl-black)

---

## 📖 Descripción

SIGR es una aplicación web desarrollada para la gestión integral de un restaurante.

Permite administrar:

- 🔐 Usuarios
- 🍔 Menú
- 📅 Reservas
- 🧾 Pedidos
- 📊 Reportes

---

## 🖼️ Vista General

```text
Cliente
    │
    ▼
Frontend React
    │
Axios
    │
    ▼
Backend Express
    │
JWT
    │
    ▼
SQLite
```

---

# 🚀 Tecnologías

| Frontend | Backend | Base de Datos |
|-----------|-----------|--------------|
| React | Node.js | SQLite |
| Vite | Express | SQLite3 |
| Bootstrap | JWT | |
| Axios | bcryptjs | |

---

# ✨ Funcionalidades

## 🔐 Autenticación

- Inicio de sesión
- JWT
- Protección de rutas
- Logout

---

## 🍽️ Gestión de Menú

✅ Crear platos

✅ Listar platos

✅ Eliminar platos

✅ Actualizar platos

---

## 📅 Gestión de Reservas

✅ Crear reserva

✅ Listar reservas

✅ Eliminar reservas

✅ Actualizar reservas

---

## 🧾 Gestión de Pedidos

✅ Crear pedido

✅ Cambiar estado

✅ Consultar pedidos

### Estados

- Pendiente
- Preparando
- Listo
- Entregado

---

## 📊 Dashboard

Visualización de:

- Total pedidos
- Total reservas
- Total ingresos

---

# 📂 Estructura

```text
SIGR
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── database
│   │   ├── middleware
│   │   ├── routes
│   │   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│
└── README.md
```

---

# ⚙️ Instalación

## Backend

```bash
cd backend

npm install

npm run dev
```

Servidor:

```text
http://localhost:3000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Aplicación:

```text
http://localhost:5173
```

---

# 🔑 Variables de entorno

```env
PORT=3000

JWT_SECRET=sigr_secret_2026

DB_NAME=sigr.db
```

---

# 🧪 Pruebas

Las pruebas de la API se realizaron utilizando:

- Bruno
- JWT
- SQLite

---

# 👨‍💻 Autor

**Jerson Stiv Rojas Gonzalez**

Ingeniería de Software

---

# 📌 Estado del Proyecto

✅ Backend finalizado

✅ Frontend funcional

✅ JWT implementado

✅ CRUD Menú

✅ CRUD Reservas

✅ CRUD Pedidos

✅ Dashboard

✅ GitHub

---

## 🏆 Versión

```text
v1.0 Baseline
```