import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// AppRegistry.registerComponent('navigation', () => App);

import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangeSignup = this.onChangeSignup.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    

    this.state = {
      person_login : " ",
      person_signup: " ",
    };
  }

  onChangeLogin(e) {
    this.setState({
      person_login: e.target.value,
    });
  }

  onChangeSignup(e) {
    this.setState({
      person_signup: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      person_login: this.state.login,
      person_signup: this.state.person_signup,
    };

    axios
      .post("http://localhost:4000/person/add, obj")
      .then((res) => console.log(res.data));

    this.setState({
      person_login: " ",
      person_signup: " ",
    });
  }

  render() {
    return (
      <div className="button">
        <Button
          variant="primary"
          value={this.state.search}
          onChange={this.onChangeSearch}
          size="lg"
          block
        >
          Login
        </Button>
        <Button
          variant="secondary"
          value={this.state.person_signup}
          onChange={this.onChangeSignup}
          size="lg"
          block
        >
          Signup
        </Button>
      </div>
    );
  }
}
