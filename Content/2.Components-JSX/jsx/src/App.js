import React from "react";
import "./App.css";

function App() {
  const myHeadingElement = <h1>I love React!</h1>;
  const myInputElement = <input type="checkbox" name="checky" id="checky" />;

  const myThirdElement = (
    <>
      <div>Div 1</div>
      <div>Div 2</div>
    </>
  );
  const myFourthElement = (
    <React.Fragment>
      <div>Div 1</div>
      <div>Div 2</div>
    </React.Fragment>
  );
  const xyz = 3
  let text = <h1>Hello {xyz}</h1>
  if(xyz<5){
    text = <h3>Good bye {xyz}</h3>
  }
  return (
    <div className="App">
      App Component
      {myHeadingElement}
      {myInputElement}
      {myThirdElement}
      <hr />
      {myFourthElement}
      {text}
    </div>
  );
}

export default App;
