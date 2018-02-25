import { Meteor } from 'meteor/meteor';
import "../imports/api/users"; // this is a shorthand that only executes a file and doesn't import anything

Meteor.startup(() => {
  // code to run on server at startup
  // const employeeSchema = new SimpleSchema({
  //   name: {
  //     type: String,
  //     min: 1,
  //     max: 200,
  //   },
  //   monthlyIncome: {
  //     type: Number,
  //     min: 1
  //   },
  //   email: {
  //     type: String,
  //     regEx: SimpleSchema.RegEx.Email
  //   }
  // });
  //
  // employeeSchema.validate({
  //   name: "Aman",
  //   monthlyIncome: 107000,
  //   email: "amanv@xyz.com"
  // });


});


// Meteor.Error is an object that contains a property called reason along with a few other properties
