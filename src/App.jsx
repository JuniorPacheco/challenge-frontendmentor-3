import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import Navbar from "./components/Navbar";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);
  const [nameCountry, setNameCountry] = useState("");
  const [theme, setTheme] = useState("dark");
  const [region, setRegion] = useState("");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const handleChangeRegion = (e) => setRegion(e.target.value);

  const countriesRender = nameCountry ? countriesFilter : countries;

  useEffect(() => {
    const URL = `https://restcountries.com/v3.1/${
      region ? "region/" + region : "all"
    }`;
    axios
      .get(URL)
      .then((res) => {
        const countriesOrder = res.data.sort((a, b) => {
          if (b.name.common > a.name.common) return -1;
          if (!(b.name.common > a.name.common)) return 1;
          return 0;
        });
        setCountries(countriesOrder);
      })
      .catch((err) => console.log(err));
  }, [region]);

  useEffect(() => {
    if (!nameCountry) return setCountriesFilter([]);
    const newCountriesByName = countries.filter((country) =>
      country.name.common.toLowerCase().includes(nameCountry.toLowerCase())
    );
    setCountriesFilter(newCountriesByName);
  }, [nameCountry]);

  return (
    <div className="App" id={theme}>
      <Navbar toggleTheme={toggleTheme} />

      <section className="App__filters">
        <div className="App__filters-input">
          <i className="bx bx-search"></i>
          <input
            value={nameCountry}
            onChange={(e) => setNameCountry(e.target.value)}
            type="text"
            placeholder="Search for a country..."
          />
        </div>

        <select
          className="App__filters-select"
          onChange={handleChangeRegion}
          name=""
          id=""
        >
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </section>

      <section className="App__containerCountries">
        {countriesRender.map((country) => (
          <CountryCard key={country.flags.svg} country={country} />
        ))}
      </section>
    </div>
  );
}

export default App;
