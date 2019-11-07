import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { tsExpressionWithTypeArguments } from "@babel/types";

const Logo= styled.img`
border-radius: 8px;
border: 1px solid white;
width:20px;`

export const Title= styled.h1`
font-size: 25px;
font-family: "Courier New", Courier, monospace;`

export const Header= styled.p`
font-family: "Courier New", Courier, monospace;
`
