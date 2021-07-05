import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import NasaDivs from './NasaDivs';
import {Title} from './topPage';
import {Header} from './topPage';

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
      <Title>Greetings from Outer Space!</ Title>
      <Header>
        This is the picture of the day from NASA!
      </Header>
      <NasaDivs Nasa={nasaData} />
    </div>
  );
}

export default App;
