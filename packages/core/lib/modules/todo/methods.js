import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { Todos } from './schema';

export const todosGet = new ValidatedMethod({
  name: 'todos.methods.get',
  validate: new SimpleSchema({ todoId: { type: String } }).validator(),
  run({ todoId }) {
    return Todos.findOne(todoId);
  },
});

export const todosGetAll = new ValidatedMethod({
  name: 'todos.methods.getAll',
  validate: new SimpleSchema({}).validator(),
  run() {
    console.log('get - ', Todos.find())
    return Todos.find().fetch();
  },
});

export const todosAdd = new ValidatedMethod({
  name: 'todos.methods.add',
  validate: new SimpleSchema({ message: { type: String } }).validator(),
  run({ message }) {
    console.log('add - ', message)
    return Todos.insert({ message });
  },
});

export const todosRemove = new ValidatedMethod({
  name: 'todos.methods.remove',
  validate: new SimpleSchema({ todoId: { type: String } }).validator(),
  run({ todoId }) {
    return Todos.remove({ _id: todoId });
  },
});

export const todosEdit = new ValidatedMethod({
  name: 'todos.methods.edit',
  validate: new SimpleSchema({ todoId: { type: String } }).validator(),
  run({ todoId }) {
    const todoObj = Todos.findOne(todoId);
    const state = todoObj && todoObj.finished;
    return Todos.update({ _id: todoId }, { $set: { finished: !state } });
  },
});
