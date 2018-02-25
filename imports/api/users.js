import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import SimpleSchema from "simple-schema";

Accounts.validateNewUser((user) => { // this is the server side code
  // console.log("new user created", user);

  let email = user.emails[0].address;
  let password = user.emails[0].password;


  try {
    new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    }).validate({ email });
  } catch (e) {
    throw new Meteor.Error(400, e.message); // e.message property is same as the string passed to Error() as inthrow new Error("this error");
  }
  return true;
});
