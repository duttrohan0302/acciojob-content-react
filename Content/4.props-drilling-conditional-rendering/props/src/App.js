import React from "react";
import './App.css';
import Users from "./Components/Users"
import Counter from "./Components/Counter"

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      count: 2,
      totalUsers: 5,
      users:[
        {
          id: 1,
          name: "RD",
          age: 25
        },
        {
          id: 2,
          name: "AB",
          age: 40
        },
        {
          id: 3,
          name: "HR",
          age: 30
        },
        {
          id: 4,
          name: "SF",
          age: 32
        },
        {
          id: 5,
          name: "GK",
          age: 22
        },
      ]
    }

    this.incrementCount = this.incrementCount.bind(this)
    this.decrementCount = this.decrementCount.bind(this)
  }

  incrementCount(){
    this.setState({
      count: this.state.count+1
    })
  }

  decrementCount(){
    this.setState({
      count: this.state.count-1
    })
  }
  render(){
    return (
      <div className="App">
          <Counter count={this.state.count} userCount={this.state.totalUsers} incrementCount={this.incrementCount} decrementCount={this.decrementCount}/>
          <Users users={this.state.users} count={this.state.count} />
      </div>
    );
  }

}

export default App;
