import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [nasaData, setnasaData]= useState([]);

  const getPics = () => {
    axios
      .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY`)
      .then(response => {
        console.log(response);
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
