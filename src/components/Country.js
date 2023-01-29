import React from "react";
import "./Country.css";

export default function Country(props) {
  return (
    <div className="country-container">
      <img className="flag-img" src={props.flag} alt="counrty flag" />
      <h2 className="country-name">{props.name}</h2>
      <p>
        <strong>Population: </strong>
        {props.population.toLocaleString("en-US")}
        <br />
        <strong>Region: </strong> {props.region}
        <br />
        <strong>Capital: </strong> {props.capital}
      </p>
    </div>
  );
}
