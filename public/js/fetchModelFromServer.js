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
// debugger
todos.fetch({ success: successCallback }); // sends HTTP GET to /todos
// debugger

function successCallback() {
	console.log('model fetch success')
	console.log(todos)
	var todo2 = todos.get(2)
	// debugger
	console.log(todo2)
	todo2.set('title', 'go fishing');
	todo2.save();
	todos.create({ title: 'Try out code samples' });
}



