import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/signUpForOrganizers.css";
import { useNavigate } from "react-router-dom";
import { AlertSuccess } from "../component/alertSuccess";
import { AlertDanger } from "../component/alertDanger";


export const SignUpUsers = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [terminos, setTerminos] = useState("")

    const data = {
        email: email,
        password: password,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        terminos: terminos,
    }

    //variable para declarar el useNavigate
    const navigate = useNavigate()

    //estados para los estilos de los alerts
    const [display, setDisplay] = useState({ display: "none" })
    const [displayDanger, setDisplayDanger] = useState({ display: "none" })
    const [errorMsg, setErrorMsg] = useState("")


    const url = process.env.REACT_ENV_URL

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(url + "/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                return response.json();
            })

            .then((data) => {

                console.log(data);
                setNombre("");
                setApellido("");
                setEmail("");
                setTelefono("");
                setDireccion("");
                setPassword("");
                setTerminos(false)
                setDisplay({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" })
                setTimeout(() => { setDisplay({ display: "none" }) }, 3500)
                setTimeout(() => { navigate("/LoginUsers") }, 3500)
            })

            .catch((error) => {
                console.error("Error submitting form:", error);
                setDisplayDanger({ display: "flex", position: "fixed", zIndex: "1", left: "25%", top: "10%" });
                setErrorMsg(error.message);

            });
    };

    return (
        <div className="SignUpForOrganizersContainer">
            <AlertSuccess message="Bienvenido a Runnest. Seras redirigido a la vista de Iniciar sesión para usuarios" funcion={() => { setDisplay({ display: "none" }) }} estilo={display} />
            <AlertDanger message="Error de registro, verificar que el correo electronico sea correcto" estilo={displayDanger} funcion={() => { setDisplayDanger({ display: "none" }) }} />
            <h1 className="TitleSignUpForOrganizers">
                Registro para Usuarios
            </h1>
            <form className="formularioRegistro">
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="Name" onChange={(e) => setNombre(e.target.value)}
                        value={nombre} name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="lastName" onChange={(e) => setApellido(e.target.value)}
                        value={apellido} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" name="email" onChange={(e) => setEmail(e.target.value)}
                        value={email} />
                    <div id="emailHelp" className="form-text">Nosotros nunca compartiremos tu correo con nadie</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input type="number" className="form-control" id="phone" onChange={(e) => setTelefono(e.target.value)}
                        value={telefono} />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">direccion</label>
                    <input type="text" className="form-control" id="direccion" onChange={(e) => setDireccion(e.target.value)}
                        value={direccion} />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="mb-3 form-check CheckBoxContainer">
                    <input type="checkbox" className="form-check-input" id="exampleCheck" onChange={(e) => setTerminos(true)}
                        value={terminos} />
                    <label className="form-check-label" htmlFor="exampleCheck">Acepto términos y condiciones</label>
                </div>
                <button type="submit" className="btn btn-primary SubmitButtonForOrganizersSignUp" onClick={handleSubmit}>Enviar</button>
            </form>
        </div>
    );
};
