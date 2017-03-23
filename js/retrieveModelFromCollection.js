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

// Models, as objects, are passed by reference
console.log(todos.get(2) === myTodo) // true


// extends the previous example

var todoCid = todos.get(myTodo.cid);

// As mentioned in previous example, 
// models are passed by reference
console.log(todoCid === myTodo); // true