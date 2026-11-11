import { Link } from "react-router-dom";

function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";
    };

    return (

        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

            <div className="container">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    SIGR
                </Link>

                <div className="navbar-nav">

                    <Link
                        className="nav-link"
                        to="/menu"
                    >
                        Menú
                    </Link>

                    <Link
                        className="nav-link"
                        to="/reservas"
                    >
                        Reservas
                    </Link>

                    <Link
                        className="nav-link"
                        to="/pedidos"
                    >
                        Pedidos
                    </Link>

                    <Link
                        className="nav-link"
                        to="/reportes"
                    >
                        Reportes
                    </Link>

                </div>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Salir
                </button>

            </div>

        </nav>
    );
}

export default Navbar;