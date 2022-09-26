import React from "react";
import "./App.css";

//ES6 Syntax
class AppES6 extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      nameInState: this.props.name
    }
    //binnding is compulsory
    this.updateCounter = this.updateCounter.bind(this)
  }
  updateCounter(){
    this.setState((state,props)=>{
      return {counter: state.counter+1}
    })
  }
  render() {
    return <div className="App">Basic App.js
    <br />
          <li>counter {this.state.counter}</li>

          <button onClick={this.updateCounter}>Increment</button>
    
    </div>;
  }
}

AppES6.defaultProps={
  name: "Rohan"
}

var createReactClass = require("create-react-class")
var App = createReactClass({
  getDefaultProps: function () {
    return{
      name: "Rohan Dutt"
    }
  },
  getInitialState: function(){
    return {
      counter: 0,
      nameInState: this.props.name
    }
  },
  updateCounter(){
    //autobind takes place, no need to bind it as createReactClass binds all methods
    this.setState((state,props)=>{
      return {counter: state.counter+1}
    })
  },
  componentDidMount: function() {
    console.log("mounted")
  },
  render: function(){
    console.log(this.props)
    return (
      <div>
        Basic App.js with props - name {this.props.name} 
        <p>State vars
          <li>counter {this.state.counter}</li>
          <li>name in state {this.state.nameInState}</li>
          <button onClick={this.updateCounter}>Increment</button>
        </p>
      </div>
    )
  }
})
export default App;
