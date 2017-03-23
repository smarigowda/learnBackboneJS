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
var idMax = todos.max(function(model){
  return model.id;
}).id;

var idMin = todos.min(function(model){
  return model.id;
}).id;

console.log(`idMax = ${idMax}`)
console.log(`idMin = ${idMin}`)

// extract a specific attribute
var captions = todos.pluck('title');
// debugger

// Filter by id

var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var Todos = Backbone.Collection.extend({
  model: Todo,
  filterById: function(ids){
    return this.filter(
      function(c) { 
        return _.contains(ids, c.id); 
      })
  }
});

var todos = new Todos()

var todo1 = new Todo({ id: 1 })
var todo2 = new Todo({ id: 2 })
var todo3 = new Todo({ id: 3 })
var todo4 = new Todo({ id: 4 })

todos.add([todo1, todo2, todo3, todo4])

var filteredTodos = todos.filterById([1, 4])


// indexOf(): return the index of a particular item within a collection

var people = new Backbone.Collection;

people.comparator = function(a, b) {
  return a.get('name') < b.get('name') ? -1 : 1;
};

var tom = new Backbone.Model({name: 'Tom'});
var rob = new Backbone.Model({name: 'Rob'});
var tim = new Backbone.Model({name: 'Tim'});

people.add(tom);
people.add(rob);
people.add(tim);

console.log(people.indexOf(rob) === 0); // true
console.log(people.indexOf(tim) === 1); // true
console.log(people.indexOf(tom) === 2); // true

// groupBy(): group a collection into groups of like items

var todos = new Backbone.Collection();

todos.add([
  { title: 'go to Belgium.', completed: false },
  { title: 'go to China.', completed: false },
  { title: 'go to Austria.', completed: true }
]);

// debugger
// create groups of completed and incomplete models
var byCompleted = todos.groupBy('completed');
var completed = new Backbone.Collection(byCompleted[true]);
console.log(completed.pluck('title'));
// logs: ["go to Austria."]
// debugger

debugger
// pick(): extract a set of attributes from a model
var Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

var todo = new Todo({ title: 'go to Austria.' });
console.log(todo.pick('title'));
// logs {title: "go to Austria"}

debugger
// omit(): extract all attributes from a model except those listed
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.omit('title'));
// logs {completed: false}


debugger
// keys() and values(): get lists of attribute names and values
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.keys());
// logs: ["title", "completed"]

console.log(todo.values());
//logs: ["go to Austria.", false]

debugger
// pairs(): get list of attributes as [key, value] pairs
var todo = new Todo({title: 'go to Austria.'});
var pairs = todo.pairs();

console.log(pairs[0]);
// logs: ["title", "go to Austria."]
console.log(pairs[1]);
// logs: ["completed", false]

debugger
// invert(): create object in which the values are keys and the attributes are values
var todo = new Todo({title: 'go to Austria.'});
console.log(todo.invert());

// logs: {'go to Austria.': 'title', 'false': 'completed'}


