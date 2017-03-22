debugger

var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  }
});

var todo1 = new Todo();
console.log(todo1.get('title')); // empty string
console.log(todo1.get('completed')); // false

var todo1Attributes = todo1.toJSON();
console.log(todo1Attributes);

var todo2 = new Todo({
  title: "Retrieved with model's get() method.",
  completed: true
});
console.log(todo2.get('title')); // Retrieved with model's get() method.
console.log(todo2.get('completed')); // true

console.log(todo2.toJSON());