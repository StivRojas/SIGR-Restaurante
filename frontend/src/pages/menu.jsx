import { useEffect, useState } from "react";
import api from "../services/api";

function menu() {

    const [platos, setPlatos] = useState([]);

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");

    useEffect(() => {

        cargarMenu();

    }, []);

    const cargarMenu = async () => {

        try {

            const response =
                await api.get("/menu");

            setPlatos(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const guardarPlato = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/menu",
                {
                    nombre,
                    descripcion,
                    precio,
                    categoria
                }
            );

            setNombre("");
            setDescripcion("");
            setPrecio("");
            setCategoria("");

            cargarMenu();

        } catch (error) {

            console.error(error);

        }
    };

    const eliminarPlato = async (id) => {

        try {

            await api.delete(
                `/menu/${id}`
            );

            cargarMenu();

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2>Menú Restaurante</h2>

            <div className="card mb-4">

                <div className="card-body">

                    <h4>Nuevo Plato</h4>

                    <form onSubmit={guardarPlato}>

                        <div className="row">

                            <div className="col-md-3">

                                <input
                                    className="form-control"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={(e) =>
                                        setNombre(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-3">

                                <input
                                    className="form-control"
                                    placeholder="Descripción"
                                    value={descripcion}
                                    onChange={(e) =>
                                        setDescripcion(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-2">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio"
                                    value={precio}
                                    onChange={(e) =>
                                        setPrecio(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-2">

                                <input
                                    className="form-control"
                                    placeholder="Categoría"
                                    value={categoria}
                                    onChange={(e) =>
                                        setCategoria(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-2">

                                <button
                                    className="btn btn-success w-100"
                                >
                                    Guardar
                                </button>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

            <table className="table table-striped">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        platos.map((plato) => (

                            <tr key={plato.id}>

                                <td>{plato.id}</td>
                                <td>{plato.nombre}</td>
                                <td>{plato.descripcion}</td>
                                <td>{plato.precio}</td>
                                <td>{plato.categoria}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            eliminarPlato(
                                                plato.id
                                            )
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );
}

export default menu;