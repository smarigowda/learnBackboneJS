// forEach
// Iterate over collections

var todos = new Backbone.Collection();

todos.add([
  { id: 1, title: 'go to Belgium.', completed: false },
  { id: 2, title: 'go to China.', completed: false },
  { id: 3, title: 'go to Austria.', completed: true }
]);

// debugger
// iterate over models in the collection
todos.forEach(function(model){
  // debugger
  console.log(model.get('title'));
});
// Above logs:
// go to Belgium.
// go to China.
// go to Austria.

// sort collection
var sortedByAlphabet = todos.sortBy(function (todo) {
	// debugger
    // return todo.get("title").toLowerCase();
    return todo.get("title");
});

console.log("- Now sorted: ");

sortedByAlphabet.forEach(function(model){
  console.log(model.get('title'));
});
// Above logs:
// - Now sorted:
// go to Austria.
// go to Belgium.
// go to China.

// map(): iterate through a collection, mapping each value through a transformation function
var count = 1;
console.log(todos.map(function(model){
  return count++ + ". " + model.get('title');
}));
// returns an array with transformation

// min()/max(): retrieve item with the min or max value of an attribute
debugger
var idMax = todos.max(function(model){
  return model.id;
}).id;

var idMin = todos.min(function(model){
  return model.id;
}).id;

console.log(`idMax = ${idMax}`)
console.log(`idMin = ${idMin}`)


