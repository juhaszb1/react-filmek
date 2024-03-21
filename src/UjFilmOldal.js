import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UjFilmOldal() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <form onSubmit={(e) => {
                e.preventDefault();
                axios({
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    url: 'https://localhost:7017/Film',
                    data: JSON.stringify({
                        nev: e.target.nev.value,
                        kiadasEve: e.target.kiadasEve.value,
                        ertekeles: e.target.ertekeles.value,
                        kepneve: e.target.kepneve.value
                    })
                })
                    .then((response) => {
                        navigate('/');
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }}>

                <div className="form-group mb-3">
                    <br />
                    <h1 className="text-center">Új film hozzáadása</h1>
                    <label className="form-label">Film neve:</label>
                    <input type="text" name="nev" className="form-control" />
                    <br />
                    <label className="form-label">Kiadás éve:</label>
                    <input type="number" name="kiadasEve" className="form-control" />
                    <br />
                    <label className="form-label">Értékelés:</label>
                    <input type="number" name="ertekeles" className="form-control" />
                    <br />
                    <label className="form-label">Kép neve:</label>
                    <input type="text" name="kepneve" className="form-control" />
                    <br />
                    <button type="submit" className="btn btn-primary">Hozzáad</button>
                </div>

            </form>
        </div>
    );
}