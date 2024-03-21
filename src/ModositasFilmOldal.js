import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ModositasFilmOldal() {
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const [, setFilm] = useState({});
    const [modositottNev, setModositottNev] = useState("");
    const [modositottKiadasEve, setModositottKiadasEve] = useState("");
    const [modositottErtekeles, setModositottErtekeles] = useState("");
    const [modositottKepneve, setModositottKepneve] = useState("");

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://localhost:7017/Film/${id}`);
                const film = await res.data;
                setFilm(film);
                setModositottNev(film.nev);
                setModositottKiadasEve(film.kiadasEve);
                setModositottErtekeles(film.ertekeles);
                setModositottKepneve(film.kepneve);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [id, modositottNev, modositottKiadasEve, modositottErtekeles, modositottKepneve]);

    const handleModositottNevChange = (event) => {
        setModositottNev(event.target.value);
    };
    const handleModositottKiadasEveChange = (event) => {
        setModositottKiadasEve(event.target.value);
    };
    const handleModositottErtekelesChange = (event) => {
        setModositottErtekeles(event.target.value);
    };
    const handleModositottKepneveChange = (event) => {
        setModositottKepneve(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            url: `https://localhost:7017/Film/${id}`,
            data: JSON.stringify({
                nev: modositottNev,
                kiadasEve: modositottKiadasEve,
                ertekeles: modositottErtekeles,
                kepneve: modositottKepneve
            })
        })
            .then((response) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1 className="text-center">Módosítás</h1>
                <div className="form-group mb-3">
                    <label className="form-label">Film neve:</label>
                    <input type="text" className="form-control" defaultValue={modositottNev} onChange={handleModositottNevChange} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Kiadási éve:</label>
                    <input type="number" className="form-control" defaultValue={modositottKiadasEve} onChange={handleModositottKiadasEveChange} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Értékelés:</label>
                    <input type="number" className="form-control" defaultValue={modositottErtekeles} onChange={handleModositottErtekelesChange} />
                </div>
                <div className="form-group mb-3">
                    <label className="form-label">Kep neve:</label>
                    <input type="text" className="form-control" defaultValue={modositottKepneve} onChange={handleModositottKepneveChange} />
                </div>
                <button type="submit" className="btn btn-primary">Módosítás</button>
            </form>
        </div>
    );
}