var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo
});

var myTodo = new Todo({ title:'Read the whole book', id: 2 });

// pass array of models on collection instantiation
var todos = new TodosCollection([ myTodo ]);
debugger
console.log("Collection size: " + todos.length); // Collection size: 1