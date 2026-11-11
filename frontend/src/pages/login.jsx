import { useState } from "react";
import api from "../services/api";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(
                "/auth/login",
                {
                    email,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            window.location.href = "/menu";

        } catch (error) {

            console.error(error);

            alert(
                "Usuario o contraseña incorrectos"
            );

        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card">

                        <div className="card-body">

                            <h3 className="mb-4">
                                Login SIGR
                            </h3>

                            <form onSubmit={handleLogin}>

                                <div className="mb-3">

                                    <label>
                                        Correo
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>
                                        Contraseña
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(
                                                e.target.value
                                            )
                                        }
                                    />

                                </div>

                                <button
                                    className="btn btn-primary w-100"
                                >
                                    Ingresar
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;