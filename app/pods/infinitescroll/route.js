import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

// var data = {
//   items: [
//     {id: 1, name: 'Test'},
//     {id: 2, name: 'Test 2'}
//   ],
//   meta: {
//     total_pages: 3
//   }
// };

// var thing = JSON.stringify(data);

export default Ember.Route.extend(InfinityRoute, {
	model() {
		/* Load pages of the Product Model, starting from page 1, in groups of 12. */
		return this.infinityModel('infinitescroll', { perPage: 12, startingPage: 1 });
	}
});
