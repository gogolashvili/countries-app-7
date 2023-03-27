import { useState } from "react";
import "./App.css";
import Headeri from "./components/Headeri";
import { useEffect } from "react";
import axios from "axios";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SectionFilter from "./components/SectionFilter";
import CountryCards from "./components/CountryCards";

function App() {
  const [data, setData] = useState();

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((responce) => {
      console.log(responce.data);
      setFetched(true);
      setData(responce.data);
    });
  }, []);

  return (
    <div className="mainCont">
      <Headeri />
      <SectionFilter />
      <CountryCards data={data} />
    </div>
  );
}

export default App;
