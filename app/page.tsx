"use client";

import React, { useState } from "react";

const HomePage = () => {
  const [inputValue, setInputValue] = useState<number | null>(null);
  const [lastInputValue, setLastInputValue] = useState<number | null>(null);

  const handleButtonClick = () => {
    setLastInputValue(inputValue);
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setInputValue(Number(e.target.value))}
        placeholder="Enter a number"
        data-testid="number-input"
        className="text-black"
      />
      <button onClick={handleButtonClick} data-testid="submit-button">
        Submit
      </button>
      <input
        type="text"
        value={lastInputValue ?? ""}
        readOnly
        placeholder="Last entered number"
        data-testid="display-input"
        className="text-black"
      />
    </div>
  );
};

export default HomePage;
