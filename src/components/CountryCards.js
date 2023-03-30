import React, { useState } from "react";
import search from "../images/search.png";
import { navigate, useNavigate } from "react-router-dom";

export default function CountryCards(props) {
  const { data } = props;
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredData = [];
  if (Array.isArray(data)) {
    filteredData = data.filter((element) => {
      if (selectedRegion === "" && searchTerm === "") {
        return true;
      } else if (selectedRegion !== "" && searchTerm !== "") {
        return (
          element.region === selectedRegion &&
          element.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        );
      } else if (selectedRegion !== "") {
        return element.region === selectedRegion;
      } else {
        return element.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      }
    });
  }

  return (
    <div className="cardsDiv">
      <div
        className="section1"
        style={{ backgroundColor: props.isDarkMode ? "#202C36" : "" }}
      >
        <div
          className="searchDiv"
          style={{ backgroundColor: props.isDarkMode ? "#2B3844" : "" }}
        >
          <img src={search} alt="searchImage" />
          <input
            style={{
              backgroundColor: props.isDarkMode ? "#2B3844" : "",
              color: props.isDarkMode ? "white" : "black",
            }}
            type="text"
            placeholder="Search Country"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div
          className="selectDiv"
          style={{ backgroundColor: props.isDarkMode ? "#2B3844" : "" }}
        >
          <select
            style={{
              backgroundColor: props.isDarkMode ? "#2B3844" : "",
              color: props.isDarkMode ? "white" : "black",
            }}
            value={selectedRegion}
            onChange={handleSelectChange}
          >
            <option value="">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </div>
      <div className="mapDiv">
        {filteredData.map((element) => {
          return (
            <div
              key={element.name.common}
              className="countryCard"
              style={{
                backgroundColor: props.isDarkMode ? "#2B3844" : "white",
              }}
              onClick={() => {
                navigate(`/countries-app-7/${element.name.common}`);
              }}
            >
              <img
                className="flag"
                src={element.flags.png}
                alt={`${element.name.common} flag`}
              />
              <h1
                style={{ color: props.isDarkMode ? "white" : "" }}
                className="nameCountry"
              >
                {element.name.common}
              </h1>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Population:{" "}
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {element.population}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Region:{" "}
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {element.region}
                </h3>
              </h2>
              <h2 style={{ color: props.isDarkMode ? "white" : "" }}>
                Capital:{" "}
                <h3 style={{ color: props.isDarkMode ? "white" : "" }}>
                  {element.capital}
                </h3>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
