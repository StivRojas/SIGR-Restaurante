import { useEffect, useState } from "react";
import api from "../services/api";

function Menu() {

    const [platos, setPlatos] = useState([]);

    useEffect(() => {

        cargarMenu();

    }, []);

    const cargarMenu = async () => {

    try {

        const token =
            localStorage.getItem("token");

        console.log(
    localStorage.getItem("token")
);
        const response =
            await api.get(
                "/menu",
                
            );

        setPlatos(response.data);
        console.log(response.data);

    } catch (error) {

        console.log("ERROR COMPLETO:");
        console.log(error);

        console.log("RESPONSE:");
        console.log(error.response);

        if(error.response){
            console.log(error.response.data);
            console.log(error.response.status);
        }

    }
};
    return (

        <div className="container mt-4">

            <h2>Menú Restaurante</h2>

            <table className="table table-striped">

                <thead>

                <tr>

                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Categoría</th>

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

                        </tr>

                    ))
                }

                </tbody>

            </table>

        </div>
    );
}

export default Menu;