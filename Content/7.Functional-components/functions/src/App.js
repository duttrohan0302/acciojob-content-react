import React from 'react';
import './App.css';
import Example1 from './Example1';
import Example2 from './Example2';

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 2
//     }
//   }
//   render(){
//     return (
//       <div className="App">
//         Basic App.js with state value count {this.state.count}
//         <AppFunc name={"Dummy name"}/>
//       </div>
//     )
//   }
// }
// function AppFunc({name}) {
//   return (
//     <div className="App">
//       Basic App.js with {name}
//     </div>
//   );
// }

const App = (props) => {

  return(
    <div className="App">
      <Example1 />
      <Example2 />
    </div>
  )
}

export default App;
