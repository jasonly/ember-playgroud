import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) { return `Person ${i}`; },
  age: 28,
  avatar() { return faker.internet.avatar(); }
});
