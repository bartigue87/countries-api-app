import React from "react";
import { useNavigate } from "react-router";
import "./Country.css";

export default function Country(props) {
  let navigate = useNavigate();

  function showCountry(event) {
    navigate(`/${event.target.id}`, { replace: true });
  }

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
      <div
        id={props.name}
        className="transparent-click"
        onClick={showCountry}
      ></div>
    </div>
  );
}
