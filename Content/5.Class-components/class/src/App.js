import React from "react";
import "./App.css";

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter:2
    }
  }
  updateCounter(){
    // wrong way
    this.setState({
      counter: this.state.counter+this.props.increment
    })

    // to fix it, here's the correct way
    this.setState((currentState,currentProps)=>({
      counter: currentState.counter + currentProps.increment
    }))
  }
  render() {
    return <div className="App">Basic App.js</div>;
  }
}

export default App;
