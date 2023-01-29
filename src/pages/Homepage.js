import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Country from "../components/Country";
import "./Homepage.css";

export default function Homepage() {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState("all");

  const apiUrl = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  const countryInfo = countryData.map((country) => {
    return (
      <Country
        key={country.alpha2Code}
        flag={country.flag}
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    );
  });

  let filteredRegionList = countryInfo.filter((country) => {
    if (filteredCountryList === "africa") {
      return country.region === "africa";
    } else if (filteredCountryList === "americas") {
      return country.region === "americas";
    } else if (filteredCountryList === "asia") {
      return country.region === "asia";
    } else if (filteredCountryList === "europe") {
      return country.region === "europe";
    } else if (filteredCountryList === "oceania") {
      return country.region === "oceania";
    } else {
      return country;
    }
  });

  function checkRegion(region) {
    setFilteredCountryList(region);
  }

  return (
    <>
      <Header />
      <Search filterRegion={checkRegion} />
      <div className="main-container">{filteredRegionList}</div>
    </>
  );
}
