import { Meteor } from "meteor/meteor";
import React from "react";
import ReactDOM from "react-dom";
import { Tracker } from "meteor/tracker";

import { AppRouter, history } from "../imports/routes/AppRoute"

window.h = history; // exposing browser history object to the global window object so that. Setting history = history didn't have any effect
// it's accessible inside of the console in the browser.

const authenticatedPages = ["/links"]; // links that a user should be able to visit only if they are logged in.
const unauthenticatedPages = ["/signup", "/"]; // links that a logged in user should never visit

Tracker.autorun(() => {
  const pathname = history.location.pathname; // changed from getLocation to location in the new API
  // !! converts any value to a boolean value. i.e. if a value exists, it is converted to true or else false
  const isAuthenticated = !!Meteor.userId(); // this is going to change as the user logs in or out
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);
  if (isAuthenticated && isUnauthenticatedPage) {
    history.replace("/links");
  } else if (!isAuthenticated && isAuthenticatedPage) {
    history.replace("/"); // history.push is used to redirect without a full page refresh
  }
});

Meteor.startup(() => {
  ReactDOM.render(<AppRouter />, document.getElementById('app')); // element and the location to render it to
});
