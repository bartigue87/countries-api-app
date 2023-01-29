import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [modeTheme, setModeTheme] = useState("Dark");

  function toggleMode() {
    modeTheme === "Dark" ? setModeTheme("Light") : setModeTheme("Dark");
  }
  return (
    <div className="header-container">
      <h1>Where in the world?</h1>
      <p onClick={toggleMode}>{modeTheme} Mode</p>
    </div>
  );
}
