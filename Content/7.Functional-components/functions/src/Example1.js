import React, { Component, useState } from "react";

// class Example1 extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={()=>this.setState({count: this.state.count+1})}>Click me</button>
//             </div>
//         )
//     }
// }
const Example1 = () => {

    // Declare a state variable which we'll call count
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count+1)
    }
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=> incrementCount()}>Click me</button>
            <button onClick={incrementCount}>Click me</button>
            {/* <button onClick={setCount(count+1)}>Click me</button> // wrong  */}
        </div>
    )
}

export default Example1;