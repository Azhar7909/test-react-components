import React from 'react';
import '../components/style/App.css';
import Timer from './Timer';


function App() {
  return (
    <div className="app-container">
      <div>
        <h1>Timer App</h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;
