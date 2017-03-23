var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var TodosCollection = Backbone.Collection.extend({
  model: Todo,
  url: '/todos'
});

var todos = new TodosCollection();
todos.fetch()
debugger
console.log(todos)

var todo2 = todos.get(2);

debugger
todo2.set('title', 'go fishing');
debugger
todo2.save(); // sends HTTP PUT to /todos/2

debugger
todos.create({title: 'Try out code samples'}); // sends HTTP POST to /todos and adds to collection