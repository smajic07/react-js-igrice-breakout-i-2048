import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import IgricaBreakout from "./components/games/breakout/IgricaBreakout";
import Igrica2048 from "./components/games/2048/Igrica2048";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakout" element={<IgricaBreakout />} />
          {/*<Route path="/korisnik" element={
            localStorage.getItem('korisnik') ? <HomeKorisnik tema={tema1} setTema={setTema1}  /> : <Navigate to="/" />
          }/>*/}
          <Route
            path="/2048"
            element={
              <>
                <Igrica2048 />
                <br />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
