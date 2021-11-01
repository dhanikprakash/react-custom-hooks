import React from 'react';
import './App.css';
import useWindowSize from './custom-hooks/WindowSize';

function App() {
  const windowSize = useWindowSize();
  return (
    <div className="App">
     Hello World!...
     {windowSize &&(
       <div>{JSON.stringify(windowSize)}</div>
     )}
    </div>
  );
}

export default App;
