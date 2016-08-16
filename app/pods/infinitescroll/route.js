import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
	model() {
		/* Load pages of the Product Model, starting from page 1, in groups of 10. */
		let params = {
			perPage: 5,
			startingPage: 1
		};

		return this.infinityModel('infinitescroll', params);
	},

  actions: {
    toRoute(params) {
      Ember.Logger.debug('need to change route', params);
    }
  }
});
