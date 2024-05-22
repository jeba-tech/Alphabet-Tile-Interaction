import React, { useState } from 'react';
import './App.css';

const App = () => {

  //Array of uppercase alphabet letters
  const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const [outputString, setOutputString] = useState(''); // Store the output string

  // Handle button clicks
  const handleClick = (letter) => {
    let newOutput = outputString + letter; // Append the clicked letter to the current output string
    newOutput = newOutput.replace(/(.)\1{2,}/g, '_') //Regular expression to find sequences of 3 or more letters
    setOutputString(newOutput); // Update new output string
  };

  return (
    <div className="App">
      <h2 style={{ marginBottom: '40px' }}>Alphabet Tile Interaction</h2>
      <div className="grid">
        {alphabet.map((letter) => (
          <button key={letter} className="tile" onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <div id="outputString">
        <p>
          {/* // Output string Display */}
          {outputString}
        </p>
      </div>
    </div>
  );
};

export default App;
