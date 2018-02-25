import React from "react";
import {Link} from "react-router-dom";
import { Accounts } from 'meteor/accounts-base'; /// dependency installed by accounts-password
import { Meteor } from "meteor/meteor"; // always import Meteor as if it were named export
import { history } from "../routes/AppRoute";

export default class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.onSubmits = this.onSubmits.bind(this); // binding it in the constructor function is better than binding it inline as it doesn't have to call bind everytime the component gets rendered.
    this.state = {
      error: '' // we could also initialize a field with this.props.someValue
    };
  }

  componentWillMount() {
    if (Meteor.userId()) {
      history.replace("/links"); // history.push() pushes a link on to history stack.
    }
  }


  onSubmits(e) {
    e.preventDefault();
    let email = this.email.value.trim();
    let password = this.password.value.trim();

    if (password.length < 9) { // adding a simple valdiation for password
      return this.setState({
        error: "Password must have atleast 8 characters"
      }); // this return simply stops the function from further execution and not for returning anything. i.e preventing Accounts.createUser from ever executing
    }
    Accounts.createUser({email, password}, (error) => {
      if (error) {
        this.setState({
          error: error.reason
        });
      }
    });
    // this.setState({
    //   error: "Something went wrong"
    // });
  }
  render() {
    return (
      <div>
        <p>This is simple Meteor Application</p>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmits} noValidate>
          <input type="email" name="email" placeholder="Enter email"
          ref={(input) => {
            this.email = input;
          }}
          />
          <input type="password" name="password" placeholder="Enter Password"
            ref={(input) => {
              this.password = input;
            }}
          />
          <button>Submit</button>
        </form>
        <Link to="/">Already have an account?</Link>
      </div>
    );
  }
};


// noValidate attribute disables browser validation of the input form
// jsx ingores undefined and null values
// bind(this) ensures that we have access to the instance inside of the function as well
// an event handler gets called with an event argument. If we want to call some other function when say a button isClicked, we
// could something like this:
// <button
//       onClick={(e) => {
//         props.someHandler(props.someProp);
//       }}>
// </button>
//
// stateless functional components do not have access to lifecycle methods. They are only accssible to Class based components.
