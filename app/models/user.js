import DS from "ember-data";
// define the User model
var User = DS.Model.extend({
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  bio: DS.attr("string"),
});
// create User fixtures
// this is what the FixtureAdapter uses as the API source
User.reopenClass({
  FIXTURES: [
    { id: 1, firstName: "Steve", lastName: "Jobs", bio: "Jobs' Bio here" },
    { id: 2, firstName: "Jony", lastName: "Ive", bio: "Ive's Bio Here" },
  ],
});
export default User;
