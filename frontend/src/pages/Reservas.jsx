import { useEffect, useState } from "react";
import api from "../services/api";

function Reservas() {

    const [reservas, setReservas] = useState([]);

    const [cliente, setCliente] = useState("");
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [personas, setPersonas] = useState("");

    useEffect(() => {

        cargarReservas();

    }, []);

    const cargarReservas = async () => {

        try {

            const response =
                await api.get("/reservas");

            setReservas(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const guardarReserva = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/reservas",
                {
                    cliente,
                    fecha,
                    hora,
                    personas
                }
            );

            setCliente("");
            setFecha("");
            setHora("");
            setPersonas("");

            cargarReservas();

        } catch (error) {

            console.error(error);

        }
    };

    const eliminarReserva = async (id) => {

        try {

            await api.delete(
                `/reservas/${id}`
            );

            cargarReservas();

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2>Gestión de Reservas</h2>

            <div className="card mb-4">

                <div className="card-body">

                    <form onSubmit={guardarReserva}>

                        <div className="row">

                            <div className="col-md-3">
                                <input
                                    className="form-control"
                                    placeholder="Cliente"
                                    value={cliente}
                                    onChange={(e) =>
                                        setCliente(e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-2">
                                <input
                                    type="date"
                                    className="form-control"
                                    value={fecha}
                                    onChange={(e) =>
                                        setFecha(e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-2">
                                <input
                                    type="time"
                                    className="form-control"
                                    value={hora}
                                    onChange={(e) =>
                                        setHora(e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-2">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Personas"
                                    value={personas}
                                    onChange={(e) =>
                                        setPersonas(e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-md-3">
                                <button
                                    className="btn btn-success w-100"
                                >
                                    Crear Reserva
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
                        <th>Cliente</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Personas</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        reservas.map((reserva) => (

                            <tr key={reserva.id}>

                                <td>{reserva.id}</td>
                                <td>{reserva.cliente}</td>
                                <td>{reserva.fecha}</td>
                                <td>{reserva.hora}</td>
                                <td>{reserva.personas}</td>

                                <td>

                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() =>
                                            eliminarReserva(
                                                reserva.id
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

export default Reservas;