import React, { Component } from "react";
import { getUsers } from "../services/usersService";

class Users extends Component {
  state = {
    users: []
  };
  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Select User</label>
        <select
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={this.props.handleUserChange}
        >
          <option value="">Kullanıcı seçiniz</option>
          {this.state.users.map(user => (
            <option key={user._id} value={user._id}>
              {user.displayName}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Users;
