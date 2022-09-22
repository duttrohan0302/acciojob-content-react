import React, { Component } from "react";
import "./App.css";

// Class Components
class App extends React.Component {
  // when this component gets initiated, this constructor is called
  constructor(props) {
    // to honor the inheritance of the parent component
    super(props);
    this.state = {
      color: "blue",
      name: "Rohan Dutt",
    };
  }
  render() {
    return (
      // <div className="App" style={{color: this.state.color}}>
      //   App Component with class having name, {this.state.name} in the city {this.props.city}
      // </div>
      <Vehicle />
    );
  }
}

// functional component
// function App() {
//   return (
//     <div className="App">
//       App Component
//     </div>
//   );
// }

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: [
        {
          type: "car",
          year: 2022,
          cost: 1000000,
        },
        {
          type: "bike",
          year: 2021,
          cost: 150000,
        },
        {
          type: "car",
          year: 2010,
          cost: 120000,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.vehicles.map((vehicle, index) => (
          <SingleVehicle key={index} myVehicle={vehicle} />
        ))}
      </div>
      // <div>
      //   <div>
      //     <ul>
      //       <li>Type of car is {this.state.vehicles[0].type}</li>
      //       <li>Manufacturing year of car is {this.state.vehicles[0].year}</li>
      //       <li>Cost of the car is {this.state.vehicles[0].cost}</li>
      //     </ul>
      //   </div>
      //   <div>
      //     <ul>
      //       <li>Type of car is {this.state.vehicles[1].type}</li>
      //       <li>Manufacturing year of car is {this.state.vehicles[1].year}</li>
      //       <li>Cost of the car is {this.state.vehicles[1].cost}</li>
      //     </ul>
      //   </div>
      //   <div>
      //     <ul>
      //       <li>Type of car is {this.state.vehicles[2].type}</li>
      //       <li>Manufacturing year of car is {this.state.vehicles[2].year}</li>
      //       <li>Cost of the car is {this.state.vehicles[2].cost}</li>
      //     </ul>
      //   </div>
      // </div>
    );
  }
}

// If it's only presentational, before R 16.8, functional components were used
// class SingleVehicle extends React.Component {
//   render() {

//     return (
//       <div>
//         <ul>
//           <li>Type of car is {this.props.myVehicle.type}</li>
//           <li>Manufacturing year of car is {this.props.myVehicle.year}</li>
//           <li>Cost of the car is {this.props.myVehicle.cost}</li>
//         </ul>
//       </div>
//     );
//   }
// }

function SingleVehicle(props) {
  console.log(props)
  return (
    <div>
      <ul>
        <li>Type of car is {props.myVehicle.type}</li>
        <li>Manufacturing year of car is {props.myVehicle.year}</li>
        <li>Cost of the car is {props.myVehicle.cost}</li>
      </ul>
    </div>
  );
}

export default App;
