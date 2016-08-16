import Ember from 'ember';

export default Ember.Component.extend({
	classNames: ['card-item'],

	// Eventually this component should be clickable
	// and probably use the ID from the element to do
	// a route transition to another page.
  click(params) {
    const item = this.get('item');
    Ember.Logger.debug('clicked', item.get('name'));
  }
});
