import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import Header from "../components/Header";
import backArrow from "../images/back-arrow.png";
import "./CountryPage.css";

export default function CountryPage() {
  const [countryData, setCountryData] = useState();
  const navigate = useNavigate();

  const countryName = useParams().cName;
  const apiUrl = `https://restcountries.com/v2/name/${countryName}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, [apiUrl]);

  let currencies = [];
  let languages = [];
  let borderCountries = [];

  if (countryData) {
    currencies = countryData[0].currencies.map((currency) => {
      return <p>{currency.name}</p>;
    });
    languages = countryData[0].languages.map((language) => {
      return <p>{language.name}</p>;
    });
    borderCountries = countryData[0].borders.map((border) => {
      return <p>{border}</p>;
    });
  }

  function returnHome(event) {
    navigate(`/`, { replace: true });
  }

  return (
    <>
      <Header />
      <div className="back-btn" onClick={returnHome}>
        <img src={backArrow} alt="back arrow" />
        <p>Back</p>
      </div>
      {!countryData ? (
        <div>Loading.....</div>
      ) : (
        <div className="country-data-container">
          <img
            className="country-flag"
            src={countryData[0].flag}
            alt="country flag"
          />
          <div className="country-right-container">
            <h3>{countryData[0].name}</h3>
            <div className="country-text-container">
              <div>
                <p>
                  <strong>Native Name:</strong> {countryData[0].nativeName}
                  <br></br>
                  <strong>Population:</strong> {countryData[0].population}
                  <br></br>
                  <strong>Region:</strong> {countryData[0].region}
                  <br></br>
                  <strong>Sub Region:</strong> {countryData[0].subregion}
                  <br></br>
                  <strong>Capital:</strong> {countryData[0].capital}
                  <br></br>
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain:</strong>{" "}
                  {countryData[0].topLevelDomain}
                </p>
                <div className="array-container">
                  <strong>Currencies: </strong> {currencies}
                </div>
                <div className="array-container">
                  <strong>Languages: </strong> {languages}
                </div>
              </div>
            </div>
            <div className="array-container">
              <strong>Border Countries: </strong> {borderCountries}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
