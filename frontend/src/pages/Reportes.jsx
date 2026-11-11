import { useEffect, useState } from "react";
import api from "../services/api";

function Reportes() {

    const [ventas, setVentas] = useState({
        totalPedidos: 0,
        ingresos: 0
    });

    const [reservas, setReservas] = useState({
        totalReservas: 0
    });

    useEffect(() => {

        cargarReportes();

    }, []);

    const cargarReportes = async () => {

        try {

            const ventasResponse =
                await api.get(
                    "/reportes/ventas"
                );

            const reservasResponse =
                await api.get(
                    "/reportes/reservas"
                );

            setVentas(
                ventasResponse.data
            );

            setReservas(
                reservasResponse.data
            );

        } catch (error) {

            console.error(error);

        }
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Dashboard SIGR
            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card bg-primary text-white">

                        <div className="card-body">

                            <h5>Total Pedidos</h5>

                            <h2>
                                {ventas.totalPedidos}
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-success text-white">

                        <div className="card-body">

                            <h5>Ingresos</h5>

                            <h2>
                                $
                                {
                                    ventas.ingresos || 0
                                }
                            </h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-warning text-dark">

                        <div className="card-body">

                            <h5>Total Reservas</h5>

                            <h2>
                                {
                                    reservas.totalReservas
                                }
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Reportes;