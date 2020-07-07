import React, { Component } from "react";

import "./signin.styles.scss";

import FormInput from "../../components/form-input/form-input.component";
import CustomButtom from "../../components/custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="email"
          />

          <FormInput
            required
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            label="password"
          />

          <CustomButtom type="submit">Sign In</CustomButtom>
        </form>
      </div>
    );
  }
}

export default SignIn;
