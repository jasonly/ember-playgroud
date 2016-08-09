import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
	model() {
		/* Load pages of the Product Model, starting from page 1, in groups of 12. */
		return this.infinityModel("infinitescroll", { perPage: 1, startingPage: 1 });
	}
});
