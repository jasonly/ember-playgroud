import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() {
    return faker.name.firstName() + ' ' + faker.name.lastName();
  },
  age() {
    return faker.random.number();
  },
  sentence() {
    return faker.lorem.sentence();
  },
  word() {
    return faker.lorem.word();
  },
  avatar() {
    return faker.image.avatar();
  },
  price() {
    return faker.commerce.price();
  },
  type(i) {
    return faker.list.random('apple', 'orange', 'banana', 'peach', 'grape')(i);
  }
});
