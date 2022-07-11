import React from "react";
import gameLogoBreakout from "../pictures/breakout.jpg";
import gameLogo2048 from "../pictures/2048.jpg";

export default function Home() {
  return (
    <div className="kontenjer">
      <h2 className="podnaslov">Igrice: </h2>
      <div className="karticaIgre">
        <a className="link" href="/breakout">
          <img
            className="slika"
            src={gameLogoBreakout}
            alt="Breakout game logo"
          />{" "}
          <br />
          <span className="podnaslov"></span>BREAKOUT
        </a>
      </div>
      <div className="karticaIgre">
        <a className="link" href="/2048">
          <img
            className="slika"
            src={gameLogo2048}
            alt="2048 game logo"
          />{" "}
          <br />
          <span className="podnaslov"></span>2048
        </a>
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
