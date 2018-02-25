import React from 'react';
import { history } from "../routes/AppRoute";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

export default class Link extends React.Component {
  onLogout() {
    // history.push("/login");
    Accounts.logout();
  }

  componentWillMount() {
    if (!Meteor.userId()) {
      history.replace("/"); // redirecting to the public page if not logged in.
    }
  }

  render() {
    return (
      <div>
        <p>This is the link page</p>
        {/*binding instance of Link component to this keyword. Albeit, not necessary in this case*/}
        <button onClick={this.onLogout.bind(this)}>Logout</button>
      </div>
    );
  }
}


// Any non-lifecycle methods you add to a class using React do not have their this automatically bound, so if you ever try to reference an instance of your component in a method you created using something like this.setState  — it will not work unless you bind it. However, since the logout method does not make any use of this , you do not have to bind this to the instance of your component.
//
// Honestly, he probably did it out of habit as do I most of the time.

// A react component gets passed the props object to render dynamic content. The component cannot change
// the props object but it can change the state object.
// Component state is just an object like props. User interaction can change the state i.e state object is mutable
