import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function tick(){
//   const element = (
//     <div>
//       <h1>Hey there</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   root.render(element)
// }
// setInterval(tick,1000)

class Clock extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    console.log("Component did mount got called")
    this.timerID = setInterval(()=>this.tick(),1000)
  }

  componentWillUnmount(){
    console.log("Component will unmount got called")
    clearInterval(this.timerID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }
  
  render(){
    console.log(this.props.color)
    console.log("Render got called.")
    console.log(this.props.children)
    return (
      <div>
        <h1>Hey there</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} with color {this.props.color} and phone {this.props.phone}</h2>
      </div>
    )
  }
}

Clock.defaultProps = {
  color: "Yellow",
  phone: "0000000000"
}

root.render(<Clock> <div>Hey there</div> </Clock>)
// function Clock(props){
//   return (
//     <div>
//       <h1>Hey there</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// function tick(){
//   root.render(<Clock />)
// }

// setInterval(tick,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
