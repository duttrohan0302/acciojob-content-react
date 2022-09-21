import React, { useState } from "react";
import "./App.css";
import Tabs from "./Components/Tabs";
import Content from "./Components/Content";

function App() {
  // const [var1, setVar1] = useState(["Hey", "There"])
  // const [var2, setVar2] = useState("Rohan Dutt")

  const tabNames = ["Home", "About", "Features"]
  const [selectedPage, setSelectedPage] = useState(tabNames[0]);

  return (
    <div className="app">
      <div className="browser">
        <Tabs myTabs={tabNames} setSelectedPage={setSelectedPage}/>
        <Content selectedPage={selectedPage}/>
      </div>

    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       var1: ["Hey", "There"],
//       var2: "Rohan Dutt",
//     };
//   }
//   tabNames = ["Home", "About", "Features"];

//   render() {
//     return (
//       <div className="app">
//         <div className="browser">
//           <Tabs myTabs={this.tabNames} />
//           <Content />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
