import { useState } from "react";
import "./App.css";
import IgricaBreakout from "./components/games/breakout/IgricaBreakout";
import Igrica2048 from "./components/games/2048/Igrica2048";
import Home from "./components/Home";

function App() {
  const [stranica, setStranica] = useState("home");
  return (
    <div>
      {stranica === "home" && <Home stranica={stranica} setStranica={setStranica} />}
      {stranica === "breakout" && <IgricaBreakout stranica={stranica} setStranica={setStranica} />}
      {stranica === "2048" && (
        <>
          <Igrica2048 stranica={stranica} setStranica={setStranica} />
          <br />
        </>
      )}
    </div>
  );
}

export default App;
