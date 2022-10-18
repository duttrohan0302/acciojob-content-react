import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Counter(){
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(oldCount=>oldCount+1);
  }
  // View
  return(
    <div>
      Value : {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

const initialState = {
  value: 0,
  name: "Rohan"
}

function counterReducer (state=initialState, action){
  // Check to see if the reducer cares about this action

  if(action.type==="increment"){
    // If yes, make a copy of the state
    return {
      ...state,
      value: state.value + 1
    }
  }

  // otherwise return the existing state unchanged
  return state;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Counter />
    </div>
  );
}

export default App;
