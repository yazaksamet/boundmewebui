import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./components/navBar";
import Track from "./components/track";
import Register from "./components/register";
import Login from "./components/login";

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    const user = null;
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/track" component={Track} />
            <Redirect from="/" exact to="/track" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
