import React from "react";
import User from "./User"

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 123,
          name: "Rohan",
          age: 40,
          city: "Bangalore",
          invalid: false,
        },
        {
          id: 128,
          name: "Ravi",
          age: 30,
          city: "Delhi",
          invalid: false,
        },
        {
          id: 287,
          name: "Roshan",
          age: 20,
          city: "Hyderabad",
          invalid: false,
        },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(id) {
    const newState = this.state.users.map((user) => {
      if (user.id === id) {
        user.invalid = !user.invalid;
      }
      return user;
    });

    this.setState({
      users: newState,
    });
  }

  render() {
    return this.state.users.map((user) => (
      <User myUser={user} key={user.id} toggle={this.toggle} />
    ));
  }
}

export default Users;
