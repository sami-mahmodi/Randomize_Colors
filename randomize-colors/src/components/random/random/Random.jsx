import React from "react";
import Title from "../Title";
import "./random.css";

export default function Random() {
  const handleClick = (e) => {
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 6)];
    }
    return color;
  }
  return (
    <div className="random-div">
      <Title text={"Randomize Colors"} classes="" />
      <button className="btn-danger margin" onClick={(e) => handleClick(e)}>
        Generate Colors
      </button>
      <button className="btn-success margin" onClick={(e) => handleClick(e)}>
        Generate Colors
      </button>
      <button className="btn-primary margin" onClick={(e) => handleClick(e)}>
        Generate Colors
      </button>
      <button className=" btn-primary margin" onClick={(e) => handleClick(e)}>
        Generate Colors
      </button>
    </div>
  );
}
