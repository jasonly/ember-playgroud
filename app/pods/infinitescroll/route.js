import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

// let rentals = [{
//   id: 1,
//   title: 'Grand Old Mansion',
//   owner: 'Veruca Salt',
//   city: 'San Francisco',
//   type: 'Estate',
//   bedrooms: 15,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
// }, {
//   id: 2,
//   title: 'Urban Living',
//   owner: 'Mike TV',
//   city: 'Seattle',
//   type: 'Condo',
//   bedrooms: 1,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
// }, {
//   id: 3,
//   title: 'Downtown Charm',
//   owner: 'Violet Beauregarde',
//   city: 'Portland',
//   type: 'Apartment',
//   bedrooms: 3,
//   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
// }];

export default Ember.Route.extend(InfinityRoute, {
	// model() {
	// 	return this.get('store').findAll('infinitescroll');
	// }
	model() {
	  /* Load pages of the Product Model, starting from page 1, in groups of 12. */
	  return this.infinityModel("infinitescroll", { perPage: 12, startingPage: 1 });
	}
});
