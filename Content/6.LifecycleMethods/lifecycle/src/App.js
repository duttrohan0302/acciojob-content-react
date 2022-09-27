import React from "react";
import './App.css';
import ErrorBoundary from "./ErrorBoundary";
import PageWithErrors from "./PageWithErrors";

class HelloWorld extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      points: 10,
      age:20,
      eligible: "true"
    }

    // this.handlePoints = this.handlePoints.bind(this)
  }
  // static getDerivedStateFromProps(props,state){
  //   return {
  //     points: 200 // update state with this
  //   }
  //   // return null // if you don't want to make any updates
  // }
  componentDidMount(){
    // el.addEventListener(()=>console.log("hello"))
  } 
  shouldComponentUpdate(nextProps, nextState){
    // console.log(nextProps,nextState)
    if(nextState.age>18 && this.state.age<18){
      return true
    }else if(nextState.age<18 && this.state.age>18){
      return true
    }
    return false
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    // console.log(prevProps,prevState)
    return {
      msg: "Custom Snapshot"
    };
  }
  componentDidUpdate(prevProps,prevState, snapshot){
    console.log(prevProps,prevState,snapshot)
  }


  componentWillUnmount(){
    // el.removeEventListener()
  }

  render(){
    console.log("The component rerendered")
    return(
      <div>
        {/* <h1>You've scored {this.state.points} points</h1> */}
        Your eligibility to vote is {this.state.eligible}
        <button onClick={()=>this.setState({age:25, eligible: "true"})}>Increase Age</button>
        <button onClick={()=>this.setState({age:17, eligible: "false"})}>Decrease Age</button>

        <ErrorBoundary>
          <PageWithErrors />
        </ErrorBoundary>
      </div>
    )
  }
}
const App = HelloWorld
export default App;
