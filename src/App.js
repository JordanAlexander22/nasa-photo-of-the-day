import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [nasaData, setnasaData]= useState([]);

  const getPics = () => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        console.log(response);
        setnasaData(response.data);
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
      <div>
        <img src={nasaData.hdurl} width={"480px"} />
      </div>
    </div>
  );
}

export default App;
