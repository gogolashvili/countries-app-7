import { useState } from "react";
import "./App.css";
import Headeri from "./components/Headeri";
import { useEffect } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import CountryCards from "./components/CountryCards";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [data, setData] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
      setFetched(true);
      setData(response.data);
    });
  }, []);

  const appStyle = {
    backgroundColor: isDarkMode ? "#202C36" : "",
    color: isDarkMode ? "white" : "black",
  };
  if (!data) {
    return;
  }
  return (
    <div className="mainCont" style={appStyle}>
      <Headeri isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/countries-app-7"
            element={<CountryCards data={data} isDarkMode={isDarkMode} />}
          />
          <Route
            path="/countries-app-7/:countryId"
            element={<CountryInfo data={data} isDarkMode={isDarkMode} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
