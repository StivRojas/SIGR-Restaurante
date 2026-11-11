import { useEffect, useState } from "react";
import api from "../services/api";

function Pedidos() {

    const [pedidos, setPedidos] = useState([]);

    const [cliente, setCliente] = useState("");
    const [mesa, setMesa] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {

        cargarPedidos();

    }, []);

    const cargarPedidos = async () => {

        try {

            const response =
                await api.get("/pedidos");

            setPedidos(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    const crearPedido = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/pedidos",
                {
                    cliente,
                    mesa,
                    total
                }
            );

            setCliente("");
            setMesa("");
            setTotal("");

            cargarPedidos();

        } catch (error) {

            console.error(error);

        }
    };

    const cambiarEstado = async (
        id,
        estado
    ) => {

        try {

            await api.put(
                `/pedidos/${id}/estado`,
                {
                    estado
                }
            );

            cargarPedidos();

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2>Gestión de Pedidos</h2>

            <div className="card mb-4">

                <div className="card-body">

                    <form onSubmit={crearPedido}>

                        <div className="row">

                            <div className="col-md-4">

                                <input
                                    className="form-control"
                                    placeholder="Cliente"
                                    value={cliente}
                                    onChange={(e) =>
                                        setCliente(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-2">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Mesa"
                                    value={mesa}
                                    onChange={(e) =>
                                        setMesa(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-3">

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Total"
                                    value={total}
                                    onChange={(e) =>
                                        setTotal(
                                            e.target.value
                                        )
                                    }
                                />

                            </div>

                            <div className="col-md-3">

                                <button
                                    className="btn btn-success w-100"
                                >
                                    Crear Pedido
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
                        <th>Mesa</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        pedidos.map((pedido) => (

                            <tr key={pedido.id}>

                                <td>{pedido.id}</td>
                                <td>{pedido.cliente}</td>
                                <td>{pedido.mesa}</td>
                                <td>${pedido.total}</td>
                                <td>{pedido.estado}</td>

                                <td>

                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() =>
                                            cambiarEstado(
                                                pedido.id,
                                                "Preparando"
                                            )
                                        }
                                    >
                                        Preparando
                                    </button>

                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() =>
                                            cambiarEstado(
                                                pedido.id,
                                                "Listo"
                                            )
                                        }
                                    >
                                        Listo
                                    </button>

                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() =>
                                            cambiarEstado(
                                                pedido.id,
                                                "Entregado"
                                            )
                                        }
                                    >
                                        Entregado
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

export default Pedidos;