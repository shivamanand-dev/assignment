/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [flip, setFlip] = useState(-1); 

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    // Determine whether to flip the image
    const isLeftSide = clientX < position.x;

    // Update image position and flip
    setFlip(isLeftSide ? 1 : -1);
    setTimeout(() => {
    setPosition({ x: clientX, y: clientY });
    }, 1000);
  };

  return (
   
  <div
      className="App"
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src="/img/wizaart.gif" 
        alt="movable"
        style={{
          position: "absolute",
          top: `${position.y - 50}px`, // Offset to center the image
          left: `${position.x - 50}px`,
          width: "100px",
          height: "100px",
           transition: "top 2s ease, left 2s ease, transform 2s ease",
          transform: `scaleX(${flip})`, // Flip the image horizontally
        }}
      />
    </div>
  );
}
