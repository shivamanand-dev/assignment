/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [flip, setFlip] = useState(-1); 
  const [transitionTime, setTransitionTime] = useState(2); // Default to 2 seconds

  const SPEED = 200; // Pixels per second (adjust as needed)

  const handleClick = (event) => {
    const { clientX, clientY } = event;

    // Calculate the distance between the current position and the clicked position
    const deltaX = clientX - position.x;
    const deltaY = clientY - position.y;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    // Calculate the dynamic time required based on speed
    const time = distance / SPEED;

    // Update the transition time dynamically
    setTransitionTime(time);

    // Determine whether to flip the image
    const isLeftSide = clientX < position.x;

    // Update image position and flip
    setFlip(isLeftSide ? 1 : -1);
    setPosition({ x: clientX, y: clientY });
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
          transition: `top ${transitionTime}s ease, left ${transitionTime}s ease`, // Dynamic transition time
          transform: `scaleX(${flip})`, // Flip the image horizontally
        }}
      />
    </div>
  );
}
