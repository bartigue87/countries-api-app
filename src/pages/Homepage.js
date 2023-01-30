import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Country from "../components/Country";
import "./Homepage.css";

export default function Homepage() {
  const [countryData, setCountryData] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState("");
  const [query, setQuery] = useState("");
  const [themeMode, setThemeMode] = useState("light");

  const apiUrl = "https://restcountries.com/v2/all";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setCountryData(data));
  }, []);

  const countryInfo = countryData
    .filter((country) => country.region.includes(filteredCountryList))
    .filter((country) => country.name.toLowerCase().includes(query))
    .map((country) => {
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

  function checkRegion(region) {
    setFilteredCountryList(region);
  }

  function checkQuery(searchInput) {
    setQuery(searchInput.toLowerCase());
  }

  function changeTheme(theme) {
    setThemeMode(theme);
  }
  return (
    <div className={`body-${themeMode}`}>
      <Header changeTheme={changeTheme}/>
      <Search
        filterRegion={checkRegion}
        checkSearch={checkQuery}
      />
      <div className="main-container">{countryInfo}</div>
    </div>
  );
}
