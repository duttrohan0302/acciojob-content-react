import React, { Component, useState } from "react";

const ControlledComponentFunctional = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        textarea: "",
        select: "",
        areComing: false
    })

    const customSubmitFunction = (event) => {
        event.preventDefault();
        console.log("form data is ", formData);

    }

    const customOnChange = (event) => {
        const value = event.target.type==="checkbox" ? event.target.checked : event.target.value;
        if (event.target.name === "password" && value.includes("@")) {
          alert("@ symbol is not allowed in passwords");
          return;
        }
        if (event.target.name === "select" && value === "coconut") {
          alert("Sorry, coconut is out of stock");
          return;
        }
        setFormData(oldFormData=> ({ ...oldFormData, [event.target.name]: value }));
    }

    const {name, password, areComing, select, textarea} = formData;
    return (
        <form onSubmit={customSubmitFunction}>
          <label htmlFor="name">
            Name: &nbsp;
            <input
              name="name"
              type="text"
              value={name}
              onChange={customOnChange}
            />
          </label>
          <br />
          <label htmlFor="password">
            Password: &nbsp;
            <input
              type="password"
              name="password"
              value={password}
              onChange={customOnChange}
            />
          </label>
          <br />
          <label htmlFor="textarea">
            Text Area: &nbsp;
            <textarea
              name="textarea"
              value={textarea}
              onChange={customOnChange}
            />
          </label>
          <br />
          <label htmlFor="select">
            Select Fruits: &nbsp;
            <select
              name="select"
              id="select"
              value={select}
              onChange={customOnChange}
            >
              <option value="grapefruit">GrapeFruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
            </select>
            <br />
            <label htmlFor="checkbox">
            Are you coming? &nbsp;
            <input
              type="checkbox"
              name="areComing"
              value={areComing}
              onChange={customOnChange}
            />
          </label>
          </label>
  
          <input type="submit" value="Submit" />
        </form>
      );

}

class ControlledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      textarea: "",
      select: "",
      areComing: false
    };
    this.customOnChange = this.customOnChange.bind(this);
    this.customSubmitFunction = this.customSubmitFunction.bind(this);
  }
  customSubmitFunction(event) {
    event.preventDefault();
    console.log("Form was submitted");
    console.log("form data is ", this.state);
  }
  customOnChange(event) {
    console.log(event.target.value);
    const value = event.target.type==="checkbox" ? event.target.checked : event.target.value;
    if (event.target.name === "password" && value.includes("@")) {
      alert("@ symbol is not allowed in passwords");
      return;
    }
    if (event.target.name === "select" && value === "coconut") {
      alert("Sorry, coconut is out of stock");
      return;
    }
    this.setState({ [event.target.name]: value });
  }
  render() {
    return (
      <form onSubmit={this.customSubmitFunction}>
        <label htmlFor="name">
          Name: &nbsp;
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.customOnChange}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password: &nbsp;
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.customOnChange}
          />
        </label>
        <br />
        <label htmlFor="textarea">
          Text Area: &nbsp;
          <textarea
            name="textarea"
            value={this.state.textarea}
            onChange={this.customOnChange}
          />
        </label>
        <br />
        <label htmlFor="select">
          Select Fruits: &nbsp;
          <select
            name="select"
            id="select"
            value={this.state.select}
            onChange={this.customOnChange}
          >
            <option value="grapefruit">GrapeFruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
          </select>
          <br />
          <label htmlFor="checkbox">
          Are you coming? &nbsp;
          <input
            type="checkbox"
            name="areComing"
            value={this.state.areComing}
            onChange={this.customOnChange}
          />
        </label>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ControlledComponentFunctional;
