import React, { useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState('');
  const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];

  const randomColor = () => {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  const randomProgressValue = () => {
    const progressValue = Math.floor(Math.random() * 101);
    setProgress(progressValue);
    const randomProgressColor = randomColor();
    setColor(randomProgressColor);
  }

  const onChange = e => {
    if (e.target.value) {
      let progress = parseInt(e.target.value, 10);
      if (progress > 100) {
        progress = 100;
      }
      setProgress(progress);
      const randomProgressColor = randomColor();
      setColor(randomProgressColor);
    } else {
      setProgress(0);
    }
  }

  const state = {
    size: 250,
    progress,
    strokeWidth: 15,
    circleOneStroke: '#d9edfe',
    circleTwoStroke: color
  }
  return (
    <div className="App">
      <div className="App-header">
        <h1>SVG Circle Progress</h1>
        <ProgressBar { ...state } />
        <p>
          <input
            type="text"
            name="percent"
            placeholder="Add Progress Value"
            onChange={onChange}
          />
        </p>
        <button onClick={randomProgressValue}>
          Random
        </button>
      </div>
    </div>
  );
}

export default App;
