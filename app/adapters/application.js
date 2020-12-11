import DS from "ember-data";

export default DS.FixtureAdapter.extend({
  // Adds a fake latency timer to see realistic transitions between routes (time between AJAX requests)
  latency: 500,
});
