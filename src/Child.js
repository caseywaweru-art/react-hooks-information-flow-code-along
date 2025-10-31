import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ color, onChangeColor }) {
  const newRandomColor = getRandomColor();

  return <div 
    onClick={() => onChangeColor(newRandomColor)}
    className="child" 
    style={{ backgroundColor: color }} 
  />;
}

export default Child;
