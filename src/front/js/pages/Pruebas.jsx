import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/AgregarResultados.css";

export const Prueba = () => {


    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const carrera = store.carreras.find(carrera => carrera.id === id);

    console.log(carrera)


    const [participante, setParticipante] = useState("")
    const [edad, setEdad] = useState("")
    const [horas, setHoras] = useState("")
    const [minutos, setMinutos] = useState("")
    const [segundos, setSegundos] = useState("")



    const data = {
        participante: participante,
        edad: edad,
        horas: horas,
        minutos: minutos,
        segundos: segundos,
        carrera_id: id

    }

    useEffect(() => {
        actions.getCarreras();
    }, []);

    const url = process.env.REACT_ENV_URL;
    const token = localStorage.getItem("accessToken");


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(url + "/resultados", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token,
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
                setParticipante("");
                setEdad("");
                setHoras("");
                setMinutos("");
                setSegundos("");

            })
            .catch((error) => {
                console.error("Error submitting form:", error);
            });

    };

    return (
        <div>
            <div className="DatosDeLaCarrera">
                <h1>{`Nombre de la carrera: ${store.carreras[id]?.nombre}`}</h1>
                <h2>{`Distancia: ${store.carreras[id]?.distancia}`}</h2>
                <h2>{`Lugar: ${store.carreras[id]?.ciudad}`}</h2>
            </div>
            <form>
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
                                <input type="text" placeholder="nombre" className=" inputParticipante" onChange={(e) => setParticipante(e.target.value)}
                                    value={participante}>
                                </input>
                            </td>
                            <td className="Edad">
                                <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" onChange={(e) => setEdad(e.target.value)}
                                    value={edad} />
                            </td>
                            <td className="Time">
                                <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" onChange={(e) => setHoras(e.target.value)}
                                    value={horas} />
                                <span>:</span>
                                <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" onChange={(e) => setMinutos(e.target.value)}
                                    value={minutos} />
                                <span>:</span>
                                <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" onChange={(e) => setSegundos(e.target.value)}
                                    value={segundos} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td className="Participante">
                                <input type="text" placeholder="nombre" className=" inputParticipante" onChange={(e) => setParticipante(e.target.value)}
                                    value={participante}>
                                </input>
                            </td>
                            <td className="Edad">
                                <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" onChange={(e) => setEdad(e.target.value)}
                                    value={edad} />
                            </td>
                            <td className="Time">
                                <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" onChange={(e) => setHoras(e.target.value)}
                                    value={horas} />
                                <span>:</span>
                                <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" onChange={(e) => setMinutos(e.target.value)}
                                    value={minutos} />
                                <span>:</span>
                                <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" onChange={(e) => setSegundos(e.target.value)}
                                    value={segundos} />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td className="Participante">
                                <input type="text" placeholder="nombre" className=" inputParticipante" onChange={(e) => setParticipante(e.target.value)}
                                    value={participante}>
                                </input>
                            </td>
                            <td className="Edad">
                                <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" onChange={(e) => setEdad(e.target.value)}
                                    value={edad} />
                            </td>
                            <td className="Time">
                                <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" onChange={(e) => setHoras(e.target.value)}
                                    value={horas} />
                                <span>:</span>
                                <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" onChange={(e) => setMinutos(e.target.value)}
                                    value={minutos} />
                                <span>:</span>
                                <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" onChange={(e) => setSegundos(e.target.value)}
                                    value={segundos} />
                            </td>
                        </tr>





                    </tbody>
                </table>
            </form>
            <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration" onClick={handleSubmit}>Enviar</button>
        </div>)
}



//////////////////////////////////




// export const AgregarResultados = () => {



//     const { id } = useParams();
//     const { store, actions } = useContext(Context);
//     const carrera = store.carreras.find(carrera => carrera.id === parseInt(id));

//     console.log(carrera)

//     console.log(store.carreras)

//     ///////////////

//     const [participante, setParticipante] = useState("")
//     const [edad, setEdad] = useState("")
//     const [horas, setHoras] = useState("")
//     const [minutos, setMinutos] = useState("")
//     const [segundos, setSegundos] = useState("")
//     const [puesto, setPuesto] = useState("")



//     const data = {
//         participante: participante,
//         edad: edad,
//         horas: horas,
//         minutos: minutos,
//         segundos: segundos,
//         carrera_id: id,
//         puesto: puesto
//     }




//     useEffect(() => {
//         actions.getCarreras();
//     }, []);

//     const url = process.env.REACT_ENV_URL;
//     const token = localStorage.getItem("accessToken");


//     const handleSubmit = (e) => {
//         e.preventDefault();

//         fetch(url + "/resultados", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Bearer " + token,
//             },
//             body: JSON.stringify(data),
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log(data);
//                 setParticipante("");
//                 setEdad("");
//                 setHoras("");
//                 setMinutos("");
//                 setSegundos("");
//                 setPuesto("");

//             })
//             .catch((error) => {
//                 console.error("Error submitting form:", error);
//             });

//     };

//     return (
//         <div>
//             <div className="DatosDeLaCarrera">
//                 <h1 className="TituloPrincipal">{`Nombre de la carrera: ${carrera?.nombre}`}</h1>
//                 <h2 className="Titulo">{`Distancia: ${carrera?.distancia}`}</h2>
//                 <h2 className="Titulo">{`Lugar: ${carrera?.ciudad}`}</h2>
//             </div>
//             <form>
//                 <table className="table ">
//                     <thead>
//                         <tr className="table-dark">
//                             <th scope="col">Puesto</th>
//                             <th scope="col">Participante</th>
//                             <th scope="col">Edad</th>
//                             <th scope="col">Tiempo</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td className="Puesto">
//                                 <input type="number" placeholder="puesto" min="1" max="3" className="inputEdad" onChange={(e) => setPuesto(e.target.value)}
//                                     value={puesto} />
//                             </td>
//                             <td className="Participante">
//                                 <input type="text" placeholder="nombre" className=" inputParticipante" onChange={(e) => setParticipante(e.target.value)}
//                                     value={participante}>
//                                 </input>
//                             </td>
//                             <td className="Edad">
//                                 <input type="number" placeholder="edad" min="0" max="120" className="inputEdad" onChange={(e) => setEdad(e.target.value)}
//                                     value={edad} />
//                             </td>
//                             <td className="Time">
//                                 <input type="number" placeholder="Horas" min="0" max="60" className="TimeInput" onChange={(e) => setHoras(e.target.value)}
//                                     value={horas} />
//                                 <span>:</span>
//                                 <input type="number" placeholder="Minutos" min="0" max="60" className="TimeInput" onChange={(e) => setMinutos(e.target.value)}
//                                     value={minutos} />
//                                 <span>:</span>
//                                 <input type="number" placeholder="Segundos" min="0" max="60" className="TimeInput" onChange={(e) => setSegundos(e.target.value)}
//                                     value={segundos} />
//                             </td>
//                         </tr>

//                     </tbody>
//                 </table>
//             </form>
//             <button type="submit" className="btn btn-primary SubmitButtonForCareerRegistration" onClick={handleSubmit}>Enviar</button>
//         </div>)
// }
