import React, { Component } from "react";
import { registerUser } from "../services/usersService";

class Register extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  };

  registerSubmit = async e => {
    e.preventDefault();
    const user = { ...this.state.data };
    console.log(user);
    const registerResponse = await registerUser(user);
    console.log(registerResponse);
  };

  handleFormChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  render() {
    return (
      <form onSubmit={this.registerSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="şnputlastName"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputDisplayName">Display Name</label>
          <input
            type="text"
            className="form-control"
            id="inputDisplayName"
            name="displayName"
            placeholder="Display Name"
            onChange={this.handleFormChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Email"
            onChange={this.handleFormChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              name="password"
              placeholder="Password"
              onChange={this.handleFormChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputConfirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputConfirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={this.handleFormChange}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}

export default Register;
