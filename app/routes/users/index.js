import Ember from "ember";
// eslint-disable-next-line ember/new-module-imports
export default Ember.Route.extend({
  model: function () {
    // use Ember Data to make an AJAX call to grab users
    return this.store.find("user");
  },
});
