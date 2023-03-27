import axios from "axios";
import { useState } from "react";
export default function CountryCards(props) {
  const { data } = props;
  return (
    <div className="cardsDiv">
      {data &&
        data.map((element) => {
          return (
            <>
              <div className="countryCard">
                <img className="flag" src={element.flags.png} />
                <h1 className="nameCountry">{element.name.common}</h1>
                <h2>
                  Population: <h3>{element.population}</h3>
                </h2>
                <h2>
                  Region: <h3>{element.region}</h3>
                </h2>
                <h2>
                  Capital: <h3>{element.capital}</h3>
                </h2>
              </div>
            </>
          );
        })}
    </div>
  );
}
