var todo = new Backbone.Model();
var todos = new Backbone.Collection([todo])
.on('reset', function(todos, options) {
  debugger
  console.log(options.previousModels);
  console.log([todo]);
  console.log(options.previousModels[0] === todo); // true
});
todos.reset([]);
console.log(todos.length)