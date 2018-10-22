import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Mongo.Collection.prototype.attachSchema = function (schemaOrFields) {
  if (schemaOrFields instanceof SimpleSchema) {
    this.simpleSchema = () => schemaOrFields;
  } else {
    this.simpleSchema().extend(schemaOrFields)
  }
};

export const Todos = new Mongo.Collection('Todos'); // eslint-disable-line

Todos.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Todos.schema = new SimpleSchema({
  message: { type: String },
  finished: { type: Boolean, defaultValue: false },
});

Todos.attachSchema(Todos.schema);

