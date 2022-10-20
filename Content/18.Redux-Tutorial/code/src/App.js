import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import {
  startRotationAction,
  stopRotationAction,
} from "./Actions/rotationActions";
import {
  decrementCounterAction,
  incrementCounterAction,
} from "./Actions/counterActions";

function App(props) {
  const checkRotation = () => {
    if(props.rotation.rotating){
      props.stopRotation()
    }else{
      props.startRotation()
    }
  }
  console.log(props.rotation)
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={`App-logo ${props.rotation.rotating ? "" : "App-logo-paused"}`}
          alt="logo"
        />
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
        <div>
          Current value: {props.counter.num}
          <br />
          <button onClick={props.increment}>Increment by 1</button>
          <button onClick={props.decrement}>Decrement by 1</button>
        </div>
        <button onClick={checkRotation}>Play/Pause Logo</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  startRotation: () => dispatch(startRotationAction),
  stopRotation: () => dispatch(stopRotationAction),
  increment: () => dispatch(incrementCounterAction),
  decrement: () => dispatch(decrementCounterAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
