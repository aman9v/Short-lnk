import React from "react";
import Login from "../ui/Login";
import SignUp from "../ui/Signup";
import Link from "../ui/Link";
import NotFound from "../ui/NotFound";
import { Router , Route, Switch } from 'react-router';
import createBrowserHistory from "history/createBrowserHistory";

export const history = createBrowserHistory();

export const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/links" component={Link}/>
        <Route component={NotFound}/>
      </Switch>
  </Router>
);

// switch renders a route exclusively. It renders the component corresponding to the first matching route.
// Now, if we’re at /about, <Switch> will start looking for a matching <Route>. <Route path="/about"/>
// will match and <Switch> will stop looking for matches and render <About>. Similarly, if we’re at /michael then <User> will render.
