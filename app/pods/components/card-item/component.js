import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
	classNames: ['card-item'],

	// Eventually this component should be clickable
	// and probably use the ID from the element to do
	// a route transition to another page.
});
