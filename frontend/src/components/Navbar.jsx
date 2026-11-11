import { Link } from "react-router-dom";

function Navbar() {

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

            </div>

        </nav>
    );
}

export default Navbar;