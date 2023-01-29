import React, { useState } from "react";
import "./Search.css";
import searchGlass from "../images/grey-search.png";

export default function Search(props) {
  const [classActive, setClassActive] = useState(`options-container`);
  const [selected, setSelected] = useState("");

  const isActive = classActive.includes("active");

  function toggleActive() {
    isActive
      ? setClassActive(`options-container`)
      : setClassActive(`options-container active`);
  }

  function selectRegion(event) {
    const secondHalfWord = event.target.id.slice(1, event.target.id.length);
    const firstLetterCap = event.target.id[0].toUpperCase();
    const joinedWord = firstLetterCap.concat(secondHalfWord);
    setSelected(joinedWord);
    toggleActive();
    filterByRegion(event.target.id);
    console.log("event.target.value:", event.target);
  }

  function filterByRegion(region) {
    props.filterRegion(region);
  }

  return (
    <div className="search-container">
      <div className="searchbar">
        <img src={searchGlass} alt="magnifting glass" />
        <input type="text" placeholder="Search for a country..." />
      </div>
      <div className="select-box">
        <div className={classActive}>
          <div className="option" id="africa" onClick={selectRegion}>
            <input type="radio" className="radio" name="region" />
            Africa
          </div>
          <div className="option" id="americas" onClick={selectRegion}>
            <input type="radio" className="radio" name="region" />
            Americas
          </div>
          <div className="option" id="asia" onClick={selectRegion}>
            <input type="radio" className="radio" name="region" />
            Asia
          </div>
          <div className="option" id="europe" onClick={selectRegion}>
            <input type="radio" className="radio" name="region" />
            Europe
          </div>
          <div className="option" id="oceania" onClick={selectRegion}>
            <input type="radio" className="radio" name="region" />
            Oceania
          </div>
        </div>
        <div className="selected" onClick={toggleActive}>
          {selected ? selected : "Filter by region"}
        </div>
      </div>
    </div>
  );
}
