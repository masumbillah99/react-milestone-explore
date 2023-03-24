import React from "react";
import './App.css';
import Device from './components/Device/Device';

function App() {

  return (
    <div className="App">
      <Device name="uphone" price="11000"></Device>
    </div>
  )

  // return React.createElement("h1", {}, "Hello");
}

export default App;
