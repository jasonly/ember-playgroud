import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  sentence: DS.attr('string'),
  word: DS.attr('string'),
  avatar: DS.attr('string'),
  price: DS.attr('number'),
  type: DS.attr('string')
});
