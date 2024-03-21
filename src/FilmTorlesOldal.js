import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

export default function FilmTorlesOldal() {
    const params = useParams();
    const navigate = useNavigate();
    const id = params.id;
    const [film, setFilm] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://localhost:7017/Film/${id}`);
                setFilm(response.data);
            }
            catch (error) {
                console.log(error);
            }
        })();
    }, [id])

    return (
        <div className="container">
            <div className="card" style={{ width: '18rem', marginRight: '100px', marginLeft: '500px' }}>
                <div className="card-body">
                    <h5 className="card-title">Film neve: {film.nev}</h5>
                    <p className="card-text">Kiadási éve: {film.kiadasEve}</p>
                    <p className="card-text">Értékelés: {film.ertekeles}</p>
                    <NavLink to={`/`}>
                        <img style={{ maxHeight: '540px', maxWidth: '100px' }} alt="kep" src={film.kepneve} />
                    </NavLink>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    axios({
                        method: 'delete',
                        headers: { 'Content-Type': 'application/json' },
                        url: 'https://localhost:7017/Film/' + id
                    })
                        .then((response) => {
                            navigate('/');
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}>
                    <div>
                        <NavLink to={`/`}>
                            <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                        </NavLink>
                        <button className="bi bi-trash btn btn-danger rounded">Törlés</button>
                    </div>
                </form>
            </div>
        </div>
    );
}