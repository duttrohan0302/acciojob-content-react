import React from "react";
import './App.css';
import Birthdays from "./Components/Birthdays";
import birthdayData from "./Resources/data";

function App() {
  return (
    <div className="App">
        <Birthdays data={birthdayData}/>
    </div>
  );
}

export default App;
