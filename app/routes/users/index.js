import Route from "@ember/routing/route";
export default Route.extend({
  model() {
    // use Ember Data to make an AJAX call to grab users
    return this.store.findAll("user");
  },
});
