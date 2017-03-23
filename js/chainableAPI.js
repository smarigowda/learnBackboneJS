var collection = new Backbone.Collection([
  { name: 'Tim', age: 5 },
  { name: 'Ida', age: 26 },
  { name: 'Rob', age: 55 }
]);

var filteredNames = collection.chain() // start chain, returns wrapper around collection's models
  							  .filter(function(item) { return item.get('age') > 10; }) // returns wrapped array excluding Tim
                              .map(function(item) { return item.get('name'); }) // returns wrapped array containing remaining names
  							  .value(); // terminates the chain and returns the resulting array

console.log(filteredNames); // logs: ['Ida', 'Rob']

debugger

var collection = new Backbone.Collection();

var afteradd = collection
    .add({ name: 'John', age: 23 })

debugger
    // .add({ name: 'Harry', age: 33 })
    // .add({ name: 'Steve', age: 41 });

// *************************************************************
// .add returns a Model but not a collectoin so we can not chain  

var names = collection.pluck('name');

console.log(names); // logs: ['John', 'Harry', 'Steve']