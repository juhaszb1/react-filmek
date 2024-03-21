import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function FilmListaOldal() {
    const [filmek, setFilmek] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            url: 'https://localhost:7017/Film'
        })
            .then((response) => {
                setFilmek(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <div className="container">
            <br />
            <h1 className="text-center">Filmek</h1>
            <div className="row" style={{ marginTop: '50px', marginLeft: '50px' }}>
                {
                    filmek.map((item) => {
                        return (
                            <div key={item.id + 4} className="card mb-3" style={{width: '18rem', marginRight: '20px'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Film neve: {item.nev}</h5>
                                    <p className="card-text">Kiadási éve: {item.kiadasEve}</p>
                                    <p className="card-text">Értékelés: {item.ertekeles}</p>
                                    <NavLink to={`/film/${item.id}`}>
                                        <img style={{width: '100px'}} alt="kep" src={item.kepneve} />
                                    </NavLink>
                                    <br />
                                    <NavLink key={item.id + 1} to={`/modositottfilm/${item.id}`}>
                                        <i className="bi bi-pencil-square">Módosítás</i>
                                    </NavLink>
                                    <NavLink key={item.id + 2} to={`/toroltfilm/${item.id}`}>
                                        <i className="bi bi-trash text-danger">Törlés</i>
                                    </NavLink>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}