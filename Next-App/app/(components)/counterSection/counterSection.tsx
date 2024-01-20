"use client"
import { useState } from "react";
import Button from "../button/button";

export default function CounterSection() {
  const initialNames = ["Aqib"];
  const [countState, setCountState] = useState(initialNames);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nameOptions = [
    ["tayyab"],
    ['amir'],
    ["aqib"],
    ["sajad"]
    
    // Add more arrays as needed
  ];

  const onclickAddHandler = () => {
    // Increment the index, and loop back to the start if it exceeds the array length
    const newIndex = (currentIndex + 1) % nameOptions.length;
    setCurrentIndex(newIndex);

    const updatedNames = [...nameOptions[newIndex]];
    setCountState(updatedNames);
  };

  const onclickSubtractHandler = () => {
    // Decrement the index, and loop back to the end if it goes below zero
    const newIndex = (currentIndex - 1 + nameOptions.length) % nameOptions.length;
    setCurrentIndex(newIndex);

    const updatedNames = [...nameOptions[newIndex]];
    setCountState(updatedNames);
  };

  return (
    <div>
      <Button onclickHanler={onclickAddHandler} title="Next" />
      <span>
        {countState.map((name, index) => (
          <span key={index}>{name} </span>
        ))}
      </span>
      <Button onclickHanler={onclickSubtractHandler} title="Previous" />
    </div>
  );
}
