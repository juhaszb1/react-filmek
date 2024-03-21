import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import FilmListaOldal from './FilmListaOldal';
import EgyFilmOdal from './EgyFilmOdal';
import UjFilmOldal from './UjFilmOldal';
import ModositasFilmOldal from './ModositasFilmOldal';
import FilmTorlesOldal from './FilmTorlesOldal';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={`/`} className="nav-link">
              <span className='nav-link'>Filmek</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`/ujfilm`} className="nav-link">
              <span className='nav-link'>Új film hozzáadása</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<FilmListaOldal />}/>
      <Route path="/film/:id" element={<EgyFilmOdal />}/>
      <Route path="/ujfilm" element={<UjFilmOldal />}/>
      <Route path='/modositottfilm/:id' element={<ModositasFilmOldal/>}/>
      <Route path='/toroltfilm/:id' element={<FilmTorlesOldal/>}/>
    </Routes>
    </Router>
  );
}

export default App;
