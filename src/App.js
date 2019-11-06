import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [nasaData, setnasaData]= useState([]);

  const getPics = () => {
    axios
      .get(`http://moontrek.jpl.nasa.gov/trektiles/Moon/EQ/LRO_WAC_Mosaic_Global_303ppd_v02/1.0.0/default/default028mm/0/0/0.jpg`)
      .then(nasaData => {
        console.log(nasaData);
        setnasaData(nasaData.data);
      })
      .catch(fail => console.log("failed to work"));
  };

  useEffect(() => {
    getPics();
  } , []);

  return (
    <div className="App">
      <h1>Greetings from Outer Space!</h1>
      <p>
        lets take a look at what we can see outside of this world today!
      </p>
    </div>
  );
}

export default App;
