import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const AgregarResultados = () => {

    return (
        <div>
            <h1>Nombre de la carrera</h1>
            <h2>Distancia</h2>
            <h2>Lugar</h2>
            <table className="table ">
                <thead>
                    <tr className="table-dark">
                        <th scope="col">#</th>
                        <th scope="col">Participante</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Tiempo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td className="Participante">
                            <input type="text" placeholder="nombre" className="inputParticipante" />
                        </td>
                        <td className="Edad">
                            <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" />
                        </td>
                        <td className="Time">
                            <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" />
                            <span>:</span>
                            <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" />
                            <span>:</span>
                            <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" />
                        </td>
                    </tr>
                    {/* <tr>
                        <th scope="row">3</th>
                        <td colSpan="4">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </table>
        </div>)
}