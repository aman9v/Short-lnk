import React from "react";
import {Link} from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { history } from "../routes/AppRoute";

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  componentWillMount() {
    if (Meteor.userId()) {
      history.replace("/links"); // redirecting to a private page.
    }
  }

  onSubmit(e) {
    e.preventDefault();

    let email = this.email.value.trim();
    let password = this.password.value.trim();

    Meteor.loginWithPassword(email, password, (err) => {
      console.log("Login callback", err); // this is client side code console.log().
      if (err) {
        this.setState({
          error: err.reason
        })
      }
    });
  }


  render() {
    return (
      <div>
        <h1>Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" name="email" placeholder="Enter your email"
              ref={(input) => {
                this.email = input;
              }}
            />
            <input type="password" name="password" placeholder="Enter your password"
              ref={(input) => {
                this.password = input;
              }}
            />
            <button>Login</button>
        </form>
        <Link to="/signup">Create Account</Link> {/*same as creating an anchor tag in normal html*/}
      </div>
    );
  }
};
