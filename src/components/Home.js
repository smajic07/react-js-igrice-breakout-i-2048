import React from "react";
import gameLogoBreakout from "../pictures/breakout.jpg";
import gameLogo2048 from "../pictures/2048.jpg";

export default function Home({stranica, setStranica}) {
  return (
    <div className="kontenjer">
      <h2 className="podnaslov">Igrice: </h2>
      <div className="karticaIgre">
        <div className="link link2" onClick={() => { setStranica("breakout") }}>
          <img
            className="slika"
            src={gameLogoBreakout}
            alt="Breakout game logo"
          />{" "}
          <br />
          <span className="podnaslov"></span>BREAKOUT
        </div>
      </div>
      <div className="karticaIgre">
        <div className="link link2" onClick={() => { setStranica("2048") }}>
          <img
            className="slika"
            src={gameLogo2048}
            alt="2048 game logo"
          />{" "}
          <br />
          <span className="podnaslov"></span>2048
        </div>
      </div>
      <footer className="futer">
        <p>
          <span>
            Copyright © 2021 All Rights Reserved by{" "}
            <a
              className="link"
              href="mailto:smajic.edin.7@gmail.com"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Send me an email"
            >
              Edin Smajić
            </a>
          </span>
          .
        </p>
      </footer>
    </div>
  );
}
